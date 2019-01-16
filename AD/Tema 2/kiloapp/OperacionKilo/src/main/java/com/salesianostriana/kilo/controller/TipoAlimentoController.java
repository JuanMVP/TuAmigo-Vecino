package com.salesianostriana.kilo.controller;

import java.net.URI;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.fasterxml.jackson.annotation.JsonView;
import com.salesianostriana.kilo.model.Campanya;
import com.salesianostriana.kilo.model.TipoAlimento;
import com.salesianostriana.kilo.service.CampanyaService;
import com.salesianostriana.kilo.service.TipoAlimentoService;
import com.salesianostriana.kilo.service.UserService;
import com.salesianostriana.proyectokilo.view.View;



@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class TipoAlimentoController {
	
	@Autowired
	CampanyaService campService;
	
	@Autowired
	UserService userService;
	
	@Autowired
	TipoAlimentoService tipoService;
	
	@Value("${jwt.header}")
	private String token;
	
	@PostMapping("/campaign/data/addData")
	public ResponseEntity<?> newTipo(@RequestBody TipoAlimento p) {
		
		Campanya c = campService.findOne(p.getCampaña().getId());
		TipoAlimento tipoAlimento = tipoService.save(p, c);
		
		URI location= ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(tipoAlimento.getId()).toUri();
		return ResponseEntity.created(location).body(tipoAlimento);
		
		
	}
	
	
		@GetMapping("/list/{id}")
		@JsonView(View.DataMasterList.class)
		public ResponseEntity<?> listarDatosMaestros(HttpServletRequest request){
			
			
			
			return ResponseEntity
					.status(HttpStatus.ACCEPTED)
					.body(tipoService.findAll());
		}
	
	
	
	@GetMapping("/campaign/data/delete")
	public ResponseEntity<?> deleteAlimento(@PathVariable Long id){
		tipoService.deleteAlimento(id);
		return ResponseEntity.noContent().build();
	}
	

}
