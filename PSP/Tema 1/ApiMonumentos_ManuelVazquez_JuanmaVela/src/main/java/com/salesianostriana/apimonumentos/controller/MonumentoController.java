package com.salesianostriana.apimonumentos.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.salesianostriana.apimonumentos.exception.MonumentNotFoundException;
import com.salesianostriana.apimonumentos.model.Monumento;
import com.salesianostriana.apimonumentos.repository.MonumentoRepository;


@RestController
public class MonumentoController {
	
	@Autowired
	private MonumentoRepository repository;
	
	@GetMapping("/monumentos")
	public List<Monumento> all(){
		return repository.findAll();
	}

	@GetMapping("/monumentos/{id}")
	public Monumento showOne(@PathVariable Long id) {
			return repository.findById(id)
					.orElseThrow(() -> new MonumentNotFoundException(id));
	}
	
	@PostMapping("/monumentos")
	public ResponseEntity<?>newEmployee(@RequestBody Monumento newMonument) {
	Monumento monument = repository.save(newMonument);
	
	
	
	URI location = ServletUriComponentsBuilder.fromCurrentRequest().path(
			"/{id}").buildAndExpand(monument.getId()).toUri();
	
	return ResponseEntity
				.created(location)
				.body(monument);
}
	
	@PutMapping("/monumentos/{id}")
	public ResponseEntity<?> replaceEmployee(@RequestBody Monumento newMonument, @PathVariable Long id) {

		Monumento updated = repository.findById(id)
			.map(monumento-> {
				monumento.setNombreMonumento(newMonument.getNombreMonumento());
				monumento.setNombreCiudad(newMonument.getNombreCiudad());
				monumento.setNombrePais(newMonument.getNombrePais());
				monumento.setDescripcion(newMonument.getDescripcion());
				monumento.setLocalizacion(newMonument.getLocalizacion());
				monumento.setUrlImagen(newMonument.getUrlImagen());
				
				return repository.save(monumento);
			})
			.orElseGet(() -> {
				newMonument.setId(id);
				return repository.save(newMonument);
			});
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path(
				"/{id}").buildAndExpand(updated.getId()).toUri();
		
		return ResponseEntity
				.created(location)
				.body(updated);
		
	}
	
	@DeleteMapping("/monumentos/{id}")
	public ResponseEntity<?> deleteMonument(@PathVariable Long id) {
		repository.deleteById(id);

		return ResponseEntity.noContent().build();
	}
	
	
}
