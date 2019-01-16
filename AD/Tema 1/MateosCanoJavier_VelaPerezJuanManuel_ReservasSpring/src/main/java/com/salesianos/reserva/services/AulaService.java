package com.salesianos.reserva.services;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.salesianos.reserva.model.Aula;
import com.salesianos.reserva.repository.AulaRepository;



@Service
public class AulaService {

	@Autowired
	AulaRepository repositorio;

	/*public Iterable<Aula> buscaAulasNoReservadas(LocalDateTime inicio, LocalDateTime fin, String tipoEspacio) {
		return repositorio.findEspaciosNoReservados(inicio, fin, tipoEspacio);
	}*/

	/*public Iterable<Espacio> buscaEspaciosReservadosPorMiUsuario(Long usuario_id) {
		return repositorio.findEspaciosReservadosPorMiUsuario(usuario_id);
	}*/

	public Aula findOne(Long id) {
		return repositorio.findById(id).orElse(null);
	}

	public Iterable<Aula> findAll() {
		return repositorio.findAll();
	}

	public Aula save(Aula aul) {
		return repositorio.save(aul);
	}

	public Aula edit(Aula aul) {
		return repositorio.save(aul);
	}

	/*public Aula delete(Aula aul) {
		Aula borrarEsp = repositorio.findById(aul.getId()).orElse(null);
		if (borrarEsp != null)
			repositorio.delete(aul);

		return borrarEsp;
	}*/

}
