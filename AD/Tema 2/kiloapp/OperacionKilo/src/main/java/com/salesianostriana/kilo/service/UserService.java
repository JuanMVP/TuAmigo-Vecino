package com.salesianostriana.kilo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.salesianostriana.kilo.model.Authority;
import com.salesianostriana.kilo.model.AuthorityName;
import com.salesianostriana.kilo.model.Campanya;
import com.salesianostriana.kilo.model.User;
import com.salesianostriana.kilo.repository.AuthorityRepository;
import com.salesianostriana.kilo.repository.CampanyaRepository;
import com.salesianostriana.kilo.repository.UserRepository;

@Service
public class UserService {

	@Autowired
    private UserRepository userRepository;
    @Autowired
    private AuthorityRepository repository;
    @Autowired
    private CampanyaRepository campanyaRepository;
    
	public void save(User u) {
		
    	Authority autoridadUser=new Authority();
    	autoridadUser.setName(AuthorityName.ROLE_USER);
    	List<Authority> listaAutoridades=new ArrayList<>();
    	listaAutoridades.add(autoridadUser);
    	u.setAuthorities(listaAutoridades);
    	autoridadUser.setUsers(u);
    	userRepository.save(u);
    	repository.save(autoridadUser);
    }
	
	public User findOne(Long id) {
		return userRepository.findById(id).orElse(null);
	}
	

	public User findByUsername(String username) {
		return userRepository.findByUsername(username);
	}
	
	public void addCampaignToUser(User u, Campanya c) {
		
		Set<Campanya> setCampaignAux = u.getCampaña();
		setCampaignAux.add(c);
    	u.setCampaña(setCampaignAux);
    	
    	Set<User> setUserAux = c.getUser();
    	setUserAux.add(u);
    	c.setUser(setUserAux);
    	
    	campanyaRepository.save(c);
		userRepository.save(u);	
    	
    }
	
	public String getUserAuthority(String username) {
		String role="";
		List<Authority> authorityList = userRepository.findByUsername(username).getAuthorities();
		for(Authority authority: authorityList) {
			role=authority.getName().name();
		}
		return role;
	}
	
	public User delete(User u) {
		User userDelete = userRepository.findByUsername(u.getUsername());
		userRepository.delete(u);
		
		return userDelete;
	}
}
