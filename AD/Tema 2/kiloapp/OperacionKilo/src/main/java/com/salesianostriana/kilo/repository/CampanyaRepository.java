package com.salesianostriana.kilo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.salesianostriana.kilo.model.Campanya;


@Repository
public interface CampanyaRepository extends JpaRepository<Campanya, Long>{

	public Campanya findById(long id);
	public Campanya findByName(String name);
	public Optional<Campanya> findByCodigo(String codigo);
	
	
	
	
}
