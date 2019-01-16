package com.salesianostriana.apimonumentos.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.salesianostriana.apimonumentos.model.Monumento;

public interface MonumentoRepository extends  JpaRepository<Monumento, Long>{

	
}
