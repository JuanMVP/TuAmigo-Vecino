package com.salesianostriana.dam.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.salesianostriana.dam.model.Reserva;
import com.salesianostriana.dam.repository.ReservaRepository;

@Service
public class ReservaService {

	@Autowired
	ReservaRepository repositorio;
	
	public Iterable<Reserva> espaciosDelUsuario (String user){
		return repositorio.findEspaciosReservadosPorMiUsuario(user);
	}
	
	public Reserva findOne(Long id) {
		return repositorio.findById(id).orElse(null);
	}

	public Iterable<Reserva> findAll() {
		return repositorio.findAll();
	}

	public Reserva save(Reserva r) {
		return repositorio.save(r);
	}

	public Reserva edit(Reserva r) {
		return repositorio.save(r);
	}

	public Reserva delete(Reserva r) {
		Reserva borrarRes = repositorio.findById(r.getId_reserva()).orElse(null);
		if (borrarRes != null)
			repositorio.delete(r);

		return borrarRes;
	}

}
