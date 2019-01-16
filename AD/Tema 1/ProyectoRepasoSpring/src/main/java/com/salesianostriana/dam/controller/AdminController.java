package com.salesianostriana.dam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.salesianostriana.dam.model.Authorities;
import com.salesianostriana.dam.model.Usuario;
import com.salesianostriana.dam.services.UsuarioService;

@Controller
//@RequestMapping("/admin")
public class AdminController {

	/*
	 * @Autowired private HttpSession session;
	 * 
	 * @GetMapping({ "/", "/index" }) public String welcome(Model model) {
	 * model.addAttribute("usuario", session.getAttribute("usuarioActual")); return
	 * "admin/index"; }
	 */

	@Autowired
	UsuarioService usuarioService;

	@GetMapping("/admin")
	public String showAdmin(Model model) {

		model.addAttribute("usuarios", usuarioService.findUsuariosNoHablitados());
		return "admin/listadoUsuarios";
	}

	@GetMapping("/usuarioEnabled/{user}")
	public String enableUsuario(@PathVariable("user") String user, Model model) {

		Usuario u = new Usuario();
		u.setUser(user);
		;
		u = usuarioService.buscarPorUsuario(user);

		if (u != null) {
			u.setEnabled(true);
			//asignamos rol
			u.getAuthorities().add(new Authorities ("ROL_USER", u));
			return "redirect:/admin";
		} else {
			// tratamiento del error
			return "redirect:../error";

		}
	}

	@GetMapping("/usuarioDisabled/{user}")
	public String disableUsuario(@PathVariable("user") String user, Model model) {

		Usuario u = new Usuario();
		u.setUser(user);
		u = usuarioService.buscarPorUsuario(user);

		if (u != null) {
			//usuarioService.delete(usuarioService.buscarPorUsuario(user));
			u.setEnabled(false);
			return "redirect:/admin";
		} else {

			return "redirect:../error";

		}
	}
	
	@GetMapping("/usuarioBorrar/{user}")
	public String borrarUsuario(@PathVariable("user") String user, Model model) {

		Usuario u = new Usuario();
		u.setUser(user);
		u = usuarioService.buscarPorUsuario(user);

		if (u != null) {
			usuarioService.delete(usuarioService.buscarPorUsuario(user));

			return "redirect:/admin";
		} else {

			return "redirect:../error";

		}
	}
}
