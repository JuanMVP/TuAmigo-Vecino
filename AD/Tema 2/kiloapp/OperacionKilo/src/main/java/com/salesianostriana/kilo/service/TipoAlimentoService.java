package com.salesianostriana.kilo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.salesianostriana.kilo.model.Campanya;
import com.salesianostriana.kilo.model.TipoAlimento;
import com.salesianostriana.kilo.repository.TipoAlimentoRepository;


@Service
public class TipoAlimentoService {
	
	@Autowired
	TipoAlimentoRepository repository;
	
	@Autowired
	CampanyaService campService;
	
	public TipoAlimento save(TipoAlimento p, Campanya camp) {
		TipoAlimento nuevoAlimento = new TipoAlimento(p.getNombreTipo(),camp);
		
		return repository.save(nuevoAlimento);
	}
	
	
	public void deleteAlimento(Long id) {
		
		repository.deleteById(id);
	}
	
	public List<TipoAlimento> findAll(){
		return repository.findAll();
	}

}
