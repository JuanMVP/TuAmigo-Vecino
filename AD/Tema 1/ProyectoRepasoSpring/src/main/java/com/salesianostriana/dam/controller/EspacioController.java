package com.salesianostriana.dam.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.salesianostriana.dam.model.Espacio;
import com.salesianostriana.dam.services.EspacioService;

@Controller
public class EspacioController {

	@Autowired
	EspacioService servicio;

	@GetMapping("/registroEspacio")
	public String agregarEspacio(Model model) {
		model.addAttribute("nuevoEspacio", new Espacio());
		return "registroEspacio";
	}

	@PostMapping("/verificar")
	public String verificar(@Valid @ModelAttribute("nuevoEspacio") Espacio e, BindingResult bindingResult,
			Model model) {

		if (bindingResult.hasErrors()) {
			return "redirect:/registroEspacio";
		} else {

			servicio.save(e);

		}
		return "redirect:/CalendarioEventos";

	}
}
