package com.salesianos.reserva.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import com.salesianos.reserva.formbean.LoginUser;
import com.salesianos.reserva.formbean.RegistroUser;
import com.salesianos.reserva.model.User;

@Controller
public class LoginController {
	
	@GetMapping({"/login", "/"})
	public String showLogin(Model model) {
		User user = new User();
		model.addAttribute("loginUser", new LoginUser());
		model.addAttribute("RegistroUsuario", new RegistroUser());
		return "Index";
	}
}