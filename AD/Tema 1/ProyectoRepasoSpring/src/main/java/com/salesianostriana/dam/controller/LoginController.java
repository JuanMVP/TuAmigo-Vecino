package com.salesianostriana.dam.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.salesianostriana.dam.formbeans.LoginUser;

//import com.salesianostriana.dam.model.Usuario;
//import com.salesianostriana.dam.services.UsuarioService;

@Controller
public class LoginController {
	/*
	private boolean errorL = false;

	@Autowired
	private UsuarioService usuarioService;

	@Autowired
	private HttpSession session;

	public static Usuario usuario;
	*/
	/*@GetMapping("/login")
	public String showLogin(Model model) {
		return "redirect:/login";
	}
	@GetMapping("/logout")
	public String doLogout(Model model) {
		/*session.setAttribute("usuarioActual", null);
		usuario = null;*/
		//return "redirect:/";
	//}
	@GetMapping({"/login", "/"})
	public String showLogin(Model model) {
		model.addAttribute("loginUser", new LoginUser());
		return "login";
	}
}