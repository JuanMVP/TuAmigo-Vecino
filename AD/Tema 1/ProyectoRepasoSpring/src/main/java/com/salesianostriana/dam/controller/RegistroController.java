package com.salesianostriana.dam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.salesianostriana.dam.formbeans.RegistroUser;
import com.salesianostriana.dam.model.Usuario;
import com.salesianostriana.dam.services.UserDetailsServiceImpl;
import com.salesianostriana.dam.services.UsuarioService;

@Controller
public class RegistroController {

	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder;

	@Autowired
	UserDetailsServiceImpl userDetailsServiceImpl;

	@Autowired
	UsuarioService servicio;

	@GetMapping("/registro")
	public String showFormRegistro(Model model) {

		Usuario user = new Usuario();
		// model.addAttribute("usuarioForm", user);
		model.addAttribute("RegistroUsuario", new RegistroUser());

		return "registro";
	}

	/*
	 * @PostMapping("/addUsuario") public String
	 * submit(@ModelAttribute("usuarioForm") Usuario user, BindingResult
	 * bindingResult, Model model) { // meter if para comprobar que no existe el
	 * usuario que se pretende registrar Usuario temp =
	 * servicio.buscarPorUsuario(user.getUser()); if (temp == null) { if
	 * (bindingResult.hasErrors()) { return "registro"; } else {
	 * model.addAttribute("usuario", user); model.addAttribute("loginUser", new
	 * LoginUser()); servicio.save(user); return "login"; } } else {
	 * model.addAttribute("registroError", "El usuario ya esta en uso"); return
	 * "redirect:/error"; }
	 * 
	 * }
	 */

	@PostMapping("/addUsuario")
	public String submit(@ModelAttribute("registroDeUsuario") RegistroUser registroUser) {
		if (registroUser.getPass1().equals(registroUser.getPass2())) {
			Usuario u = new Usuario();
			u = servicio.buscarPorUsuario(registroUser.getUser());
			if (u == null) {
				u = new Usuario();
				//ciframos la contraseña dada por el método bCrypt
				String cifrada = bCryptPasswordEncoder.encode(registroUser.getPass1());
				u.setUser(registroUser.getUser());
				u.setContrasena(cifrada);
				u.setEnabled(false);
				servicio.save(u);
			} else {
				// user is already in database
				return "redirect:/error";
			}

		} else {
			// contraseña don't match
			return "redirect:/error";
		}
		return "redirect:/login";
	}
}
