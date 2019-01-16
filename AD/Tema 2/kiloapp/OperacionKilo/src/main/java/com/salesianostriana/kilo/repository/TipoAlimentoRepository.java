package com.salesianostriana.kilo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.salesianostriana.kilo.model.TipoAlimento;


public interface TipoAlimentoRepository extends JpaRepository<TipoAlimento, Long>{

	TipoAlimento findById(long id);
}
