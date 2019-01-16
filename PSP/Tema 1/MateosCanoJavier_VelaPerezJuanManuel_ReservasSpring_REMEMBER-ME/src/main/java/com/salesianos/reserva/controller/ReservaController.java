package com.salesianos.reserva.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import com.salesianos.reserva.formbean.RegistroReserva;
import com.salesianos.reserva.model.Reserva;
import com.salesianos.reserva.services.AulaService;
import com.salesianos.reserva.services.ReservaService;
import com.salesianos.reserva.services.UsuarioService;

@Controller
public class ReservaController {

	@Autowired
	ReservaService reservaService;
	@Autowired
	AulaService aulaService;
	@Autowired
	UsuarioService userService;
	
	/*@GetMapping("/reservarAula")
	public String FormReserva(Model model) {
		RegistroReserva formReserva = new RegistroReserva();
		model.addAttribute("reservaForm", formReserva);

		return "reservaForm";

	}*/
	
	@GetMapping("/listaEliminarReserva")
	public String eliminarReserva(Model model) {

		return "listaEliminarReserva";

	}
	
	
	@GetMapping("/removeReserva/{id_reserva}")
	public String borrarReserva(@PathVariable("id_reserva") long IdReserva, Model model) {
		Reserva res = reservaService.findOne(IdReserva);
		if (res != null) {
			reservaService.delete(res);
			return "redirect:/listaEliminarReserva";
		} else {
			return "redirect:../error";
		}
		
	}
	
	
}
