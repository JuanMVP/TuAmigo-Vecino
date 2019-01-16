package com.salesianostriana.dam.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.salesianostriana.dam.model.Usuario;
import com.salesianostriana.dam.repository.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	UsuarioRepository repositorio;
	
	public Usuario login(String username, String pass) {
		return repositorio.findFirstByUserAndContrasena(username, pass);
	}
	
	public Usuario buscarPorUsuario(String user) {
		return repositorio.findFirstByUser(user);
	}
	
	public Iterable<Usuario> findUsuariosNoHablitados() {
		return repositorio.findUsuariosNoHablitados();
	}
	
	public Iterable<Usuario> findAll() {
		return repositorio.findAll();
	}
	
	public Usuario findOne(Long id) {
		return repositorio.findById(id).orElse(null);
	}
	
	public Usuario save(Usuario u) {
		return repositorio.save(u);
	}
	
	public Usuario edit(Usuario u) {
		return repositorio.save(u);
	}
	
	public Usuario delete(Usuario u) {
		Usuario aBorrar = repositorio.findFirstByUser(u.getUser());
			repositorio.delete(u);
		
		return aBorrar;
	}
}
