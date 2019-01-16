package com.salesianos.reserva.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.salesianos.reserva.model.User;


@Repository
public interface UserRepository extends JpaRepository <User, Long>{
	
	public User findFirstByUsernameAndPassword(String username, String password);
	
	public User findFirstByUsername(String username);
	
	@Query("select u from User u JOIN FETCH u.authorities WHERE u.username = ?1")
	public User findUserWithAuthorities(String username);
	
	@Query(nativeQuery=true, value="SELECT * FROM USER WHERE ENABLED IS FALSE")
	Iterable<User> findUsuariosNoHablitados();


	
}