package com.salesianostriana.dam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.salesianostriana.dam.formbeans.LoginUser;
import com.salesianostriana.dam.model.Reserva;
import com.salesianostriana.dam.model.Usuario;
import com.salesianostriana.dam.services.ReservaService;
import com.salesianostriana.dam.services.UsuarioService;

@Controller
//@RequestMapping("/app")
public class UsuarioController {
	
	@Autowired
	UsuarioService servicioUsuario;
	
	@Autowired
	ReservaService servicioReserva;

	@GetMapping("/CalendarioEventos")
	public String showPortada(Model model) {
		model.addAttribute("loginUser", new LoginUser());
		return "/CalendarioEventos";
	}

	@GetMapping("/anadeReserva")
	public String showFormReserva(Model model) {
		Reserva r = new Reserva();
		model.addAttribute("reservaForm", r);

		return "/FormAddReserva";

	}

	@PostMapping("/addReservaForm")
	public String addReservaForm(@ModelAttribute("reservaForm") Reserva r, BindingResult bindingResult, Model model) {
		if (bindingResult.hasErrors()) {
			return "FormAddReserva";
		} else {
			model.addAttribute("reservaForm", r);
			servicioReserva.save(r);
			return "redirect:/CalendarioEventos";
		}
	}

	@GetMapping("/removeReserva")
	public String listaReservas() {
		return "TablaReservas";
	}

	@GetMapping("/removeReserva/{id_reserva}")
	public String borrarReserva(@PathVariable("id_reserva") long id_reserva, Model model) {
		Reserva rTmp = servicioReserva.findOne(id_reserva);
		if (rTmp == null)
			return "redirect:/portada";

		servicioReserva.delete(rTmp);
		return "redirect:/portada";
	}
	
	//MÉTODO PARA LISTAR TODAS LAS RESERVAS DEL USUARIO, POSIBLE POST?
	/*
	@GetMapping("/listarReservas/{user}")
	public String listarReservas(@PathVariable("user") String user, Model model) {
		
		Usuario u = new Usuario();
		u.setUser(user);
		servicioReserva.espaciosDelUsuario(user);
		return 
		
		
	}*/

}
