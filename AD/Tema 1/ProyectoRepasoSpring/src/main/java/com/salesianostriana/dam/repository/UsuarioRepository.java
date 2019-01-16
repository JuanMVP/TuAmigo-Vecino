package com.salesianostriana.dam.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.salesianostriana.dam.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository <Usuario, Long>{
	
	//@Query("select u from Usuario u where u.username = ?1 and u.pass = ?2")
	//public Usuario buscaPorLoginYPassword(String username, String password);
	
	public Usuario findFirstByUserAndContrasena(String username, String pass);
	
	public Usuario findFirstByUser(String user);
	
	@Query("select u from Usuario u JOIN FETCH u.authorities WHERE u.user = ?1")
	public Usuario findUserWithAuthorities(String username);
	
	@Query(nativeQuery=true, value="SELECT * FROM USUARIO WHERE ENABLED IS FALSE")
	Iterable<Usuario> findUsuariosNoHablitados();


	
}