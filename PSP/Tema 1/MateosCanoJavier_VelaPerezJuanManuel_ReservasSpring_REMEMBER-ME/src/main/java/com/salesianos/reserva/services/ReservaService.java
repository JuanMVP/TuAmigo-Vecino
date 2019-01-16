package com.salesianos.reserva.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.salesianos.reserva.model.Reserva;
import com.salesianos.reserva.repository.ReservaRepository;


@Service
public class ReservaService {

	@Autowired
	ReservaRepository repositorio;
	

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
		Reserva borrarRes = repositorio.findById(r.getIdReserva()).orElse(null);
		if (borrarRes != null)
			repositorio.delete(r);

		return borrarRes;
	}

}
