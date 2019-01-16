package com.salesianos.reserva.controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import com.salesianos.reserva.model.Authorities;
import com.salesianos.reserva.model.User;
import com.salesianos.reserva.services.UsuarioService;


@Controller
public class AdminController {
	
	@Autowired
	UsuarioService usuarioService;
	
	@GetMapping("/cp_admin")
	public String controlAdmin(Model model) {
		return "cp_admin";
	}
	
	@GetMapping("/calendario")
	public String calendario(Model model) {
		return "calendario";
	}
	
	@GetMapping("/listaRegistrados")
	public String listadeRegistro(Model model) {
		model.addAttribute("users", usuarioService.findUsuariosNoHablitados());
		return "listaRegistrados";
	}
	
	@GetMapping("/userEnabled/{user}")
	public String enableUsuario(@PathVariable("user") String user, Model model) {

		User u = new User();
		u.setUsername(user);
		u = usuarioService.buscarPorUsuario(user);

		if (u != null) {
			u.setEnabled(true);
			Set<Authorities> authorities = new HashSet<>();
			authorities.add(new Authorities("ROLE_USER", u));
			u.setAuthorities(authorities);
			usuarioService.save(u);
			return "redirect:/listaRegistrados";
		} else {
			return "redirect:../error";

		}
	}
	
	@GetMapping("/userRemove/{user}")
	public String borrarUsuario(@PathVariable("user") String user, Model model) {

		User u = new User();
		u.setUsername(user);
		u = usuarioService.buscarPorUsuario(user);

		if (u != null) {
			usuarioService.delete(usuarioService.buscarPorUsuario(user));

			return "redirect:/listaRegistrados";
		} else {

			return "redirect:../error";

		}
	}
	
	
}