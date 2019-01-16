package com.salesianos.reserva.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.salesianos.reserva.model.Aula;



public interface AulaRepository  extends JpaRepository <Aula, Long>{
	
	public Aula findFirstByName(String nombre);
	
	
	

}
