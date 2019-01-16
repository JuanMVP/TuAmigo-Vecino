package com.salesianostriana.apimonumentos.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User.UserBuilder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.salesianostriana.apimonumentos.model.User;
import com.salesianostriana.apimonumentos.repository.UserRepository;


@Service("userDetailsService")
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	UserRepository repositorio;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// Buscamos el usuario por su nombe de usuario
		User user = repositorio.findUserWithAuthorities(username);

		UserBuilder builder = null;

		// Si lo localizamos, procedemos a construirlo.
		if (user != null) {
			// Iniciamos la construcción con su nombre
			builder = org.springframework.security.core.userdetails.User.withUsername(username);
			
			// Establecemos su contraseña
			builder.password(user.getPassword());
			// Indicamos sus roles
			String[] authorities = user.getAuthorities().stream().map(a -> a.getAuthority()).toArray(String[]::new);
			builder.authorities(authorities);
		} else {
			// En caso de no localizarlo, lanzamos una excepción
			throw new UsernameNotFoundException("User not found");
		}

		// Devolvemos la instancia de UserDetails.
		return builder.build();

	}

}

