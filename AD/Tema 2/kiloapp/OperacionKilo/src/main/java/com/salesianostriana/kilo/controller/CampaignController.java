package com.salesianostriana.kilo.controller;

import java.net.URI;
import java.util.List;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.fasterxml.jackson.annotation.JsonView;
import com.salesianostriana.kilo.model.Aportacion;
import com.salesianostriana.kilo.model.Campanya;
import com.salesianostriana.kilo.model.TipoAlimento;
import com.salesianostriana.kilo.model.User;
import com.salesianostriana.kilo.repository.AportacionRepository;
import com.salesianostriana.kilo.repository.CampanyaRepository;
import com.salesianostriana.kilo.repository.TipoAlimentoRepository;
import com.salesianostriana.kilo.response.DtoResponse;
import com.salesianostriana.kilo.security.CampaignNotFoundException;
import com.salesianostriana.kilo.security.JwtTokenUtil;
import com.salesianostriana.kilo.service.CampanyaService;

import com.salesianostriana.kilo.service.UserService;

import com.salesianostriana.proyectokilo.view.View;

import io.swagger.annotations.ApiOperation;


import com.salesianostriana.kilo.service.UserService;
import com.salesianostriana.proyectokilo.view.View;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class CampaignController {
	@Autowired
	private CampanyaRepository repository;
	@Autowired
	private TipoAlimentoRepository repo;
	@Autowired
	private CampanyaService campanyaService;
	@Autowired
	private AportacionRepository aportacionRepo;
	@Autowired
	private UserService userService;
	@Value("${jwt.header}")
	private String tokenHeader;
	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	

	
	
	@GetMapping("/auth/campaigns")
	public ResponseEntity<?> all(HttpServletRequest request) {
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(campanyaService.findCampaigns());
	}

	@GetMapping("/campaign/datamaster")
	public List<TipoAlimento> one() {

		return repo.findAll();
	}
	
	@JsonView(View.CampaignJoin.class)
	@PostMapping("/campaign/join")
	public ResponseEntity<?> joinCampaign(@RequestBody DtoResponse codigo, HttpServletRequest request) {

		String token = request.getHeader(tokenHeader).substring(7);
		String username = jwtTokenUtil.getUsernameFromToken(token);

		User u = userService.findByUsername(username);

		Campanya campaignUnirse = campanyaService.buscarPorCodigo(codigo.getCodigo())
				.orElseThrow(() -> new CampaignNotFoundException(codigo.getCodigo()));

		userService.addCampaignToUser(u, campaignUnirse);

		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(campaignUnirse.getId()).toUri();

		return ResponseEntity.created(location).body(campaignUnirse);
	}
	
	@JsonView(View.CampaignMyList.class)
	@GetMapping("/campaign/mylist")
	public Set<Campanya> myAll(HttpServletRequest request) {

		String token = request.getHeader(tokenHeader).substring(7);
		String username = jwtTokenUtil.getUsernameFromToken(token);

		Set<Campanya> listCampaign = userService.findByUsername(username).getCampaña();

		return listCampaign;
	}
	
	
	@PostMapping("/campaign/add")
	public Aportacion newAportacion(@RequestBody Aportacion newAportacion) {
		return aportacionRepo.save(newAportacion);

	}


	@PostMapping("/campaing/addCampaing")
	public ResponseEntity<?> newCampaing(@RequestBody Campanya newCampaing){
			newCampaing.setName(newCampaing.getName());
			newCampaing.setDescripcion(newCampaing.getDescripcion());
			newCampaing.setCodigo(newCampaing.getCodigo());
			campanyaService.save(newCampaing);
			
			URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
					.buildAndExpand(newCampaing.getId()).toUri();
			return ResponseEntity.created(location).body(newCampaing);
	}
	
	
	@GetMapping("/campaign/delete/{id}")
	public ResponseEntity<?> campaignDelete(@PathVariable Long id){
		campanyaService.delete(id);
		return ResponseEntity.noContent().build();
		
	}
	
	@JsonView(View.CampaignAportacion.class)
	@GetMapping("aportacion/list/{id}")
	public ResponseEntity<?> listarMisAportaciones(@PathVariable Long id) {
		String userlogueado = SecurityContextHolder.getContext().getAuthentication().getName();

		return ResponseEntity.status(HttpStatus.ACCEPTED).body(aportacionRepo
				.allMyCampaignsContributions(userService.findByUsername(userlogueado), repository.findById(id).orElse(null)));
	}

}
