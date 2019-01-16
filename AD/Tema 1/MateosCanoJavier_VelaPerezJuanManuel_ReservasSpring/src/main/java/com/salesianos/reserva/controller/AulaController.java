package com.salesianos.reserva.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.salesianos.reserva.formbean.RegistroAula;
import com.salesianos.reserva.model.Aula;
import com.salesianos.reserva.services.AulaService;

@Controller
public class AulaController {
	
	@Autowired
	AulaService servicio;
	
	@GetMapping("/formularioCrearSala")
	public String agregarSala(Model model) {
		model.addAttribute("nuevaSala", new Aula());
		return "formularioCrearSala";
	}
	
	
	@PostMapping("/addSala")
	public String comprobar(@Valid @ModelAttribute("nuevaSala") Aula a, BindingResult bindingResult, Model model , RegistroAula registroAula) {
		if(bindingResult.hasErrors()) {
			return "redirect:/formularioCrearSala";
		}else {
			a.setName(registroAula.getName());
			servicio.save(a);
		}
		
		return "redirect:/cp_admin";
	}

}
