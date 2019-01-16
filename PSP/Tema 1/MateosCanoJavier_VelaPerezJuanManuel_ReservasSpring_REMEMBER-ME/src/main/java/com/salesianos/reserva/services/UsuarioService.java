package com.salesianos.reserva.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.salesianos.reserva.model.User;
import com.salesianos.reserva.repository.UserRepository;


@Service
public class UsuarioService {

	@Autowired
	UserRepository repositorio;
	
	public User login(String username, String password) {
		return repositorio.findFirstByUsernameAndPassword(username, password);
	}
	
	public User buscarPorUsuario(String username) {
		return repositorio.findFirstByUsername(username);
	}
	
	
	public Iterable<User> findAll() {
		return repositorio.findAll();
	}
	
	public User findOne(Long id) {
		return repositorio.findById(id).orElse(null);
	}
	
	public User save(User u) {
		return repositorio.save(u);
	}
	
	public User edit(User u) {
		return repositorio.save(u);
	}
	
	public User delete(User u) {
		User aBorrar = repositorio.findFirstByUsername(u.getUsername());
			repositorio.delete(u);
		
		return aBorrar;
	}
	
	public Iterable<User> findUsuariosNoHablitados() {
		return repositorio.findUsuariosNoHablitados();
	}
	
}
