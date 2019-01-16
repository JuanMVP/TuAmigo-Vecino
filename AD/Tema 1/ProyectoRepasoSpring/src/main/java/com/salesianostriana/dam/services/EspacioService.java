package com.salesianostriana.dam.services;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.salesianostriana.dam.model.Espacio;
import com.salesianostriana.dam.repository.EspacioRepository;


@Service
public class EspacioService {

	@Autowired
	EspacioRepository repositorio;

	public Iterable<Espacio> buscaEspaciosNoReservados(LocalDateTime inicio, LocalDateTime fin, String tipoEspacio) {
		return repositorio.findEspaciosNoReservados(inicio, fin, tipoEspacio);
	}

	public Iterable<Espacio> buscaEspaciosReservadosPorMiUsuario(Long usuario_id) {
		return repositorio.findEspaciosReservadosPorMiUsuario(usuario_id);
	}

	public Espacio findOne(Long id) {
		return repositorio.findById(id).orElse(null);
	}

	public Iterable<Espacio> findAll() {
		return repositorio.findAll();
	}

	public Espacio save(Espacio esp) {
		return repositorio.save(esp);
	}

	public Espacio edit(Espacio esp) {
		return repositorio.save(esp);
	}

	public Espacio delete(Espacio esp) {
		Espacio borrarEsp = repositorio.findById(esp.getId()).orElse(null);
		if (borrarEsp != null)
			repositorio.delete(esp);

		return borrarEsp;
	}

}
