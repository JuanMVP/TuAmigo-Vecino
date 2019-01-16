package com.salesianos.reserva.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.salesianos.reserva.formbean.RegistroUser;
import com.salesianos.reserva.model.User;
import com.salesianos.reserva.services.UserDetailsServiceImpl;
import com.salesianos.reserva.services.UsuarioService;



@Controller
public class SignUpController {
	
	@Autowired
	private UsuarioService userService;

	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder;

	@Autowired
	UserDetailsServiceImpl userDetailsServiceImpl;

	@PostMapping("/addUser")
	public String submit(@ModelAttribute("registroDeUsuario") RegistroUser registroUser) {
	
			User u = new User();
			u = userService.buscarPorUsuario(registroUser.getUsername());
			if (u == null) {
				u = new User();
				//ciframos la contraseña dada por el método bCrypt
				String cifrada = bCryptPasswordEncoder.encode(registroUser.getPassword());
				u.setUsername(registroUser.getUsername());
				u.setPassword(cifrada);
				u.setEmail(registroUser.getEmail());
				u.setLastname(registroUser.getLastname());
				u.setEnabled(false);
				userService.save(u);
			} else {
				// user is already in database
				return "redirect:/error";
			}

		return "redirect:/";
	}
}
