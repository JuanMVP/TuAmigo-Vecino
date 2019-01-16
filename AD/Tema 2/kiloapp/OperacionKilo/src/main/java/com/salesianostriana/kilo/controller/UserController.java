package com.salesianostriana.kilo.controller;

import java.net.URI;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.salesianostriana.kilo.model.Authority;
import com.salesianostriana.kilo.model.AuthorityName;
import com.salesianostriana.kilo.model.User;
import com.salesianostriana.kilo.repository.UserRepository;
import com.salesianostriana.kilo.security.JwtTokenUtil;
import com.salesianostriana.kilo.security.JwtUser;
import com.salesianostriana.kilo.service.UserService;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class UserController {
	
	/*@Autowired
    private BCryptPasswordEncoder encoder;*/

	@Autowired
	private UserService service;
	
    @Value("${jwt.header}")
    private String tokenHeader;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    @Qualifier("jwtUserDetailsService")
    private UserDetailsService userDetailsService;

    @RequestMapping(value = "user", method = RequestMethod.GET)
    public JwtUser getAuthenticatedUser(HttpServletRequest request) {
        String token = request.getHeader(tokenHeader).substring(7);
        String email = jwtTokenUtil.getUsernameFromToken(token);
        JwtUser user = (JwtUser) userDetailsService.loadUserByUsername(email);
        return user;
    }



	@PostMapping("/auth/signup")
	public ResponseEntity<?> newUser(@RequestBody User newUser) {
	String token = jwtTokenUtil.generateToken(newUser);
	//newUser.setPassword(encoder.encode(newUser.getPassword()));
	newUser.setPassword(newUser.getPassword());
	newUser.isEnabled();newUser.setEnabled(true);
	
	
		service.save(newUser);
		
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path(
				"/{id}").buildAndExpand(newUser.getId()).toUri();
		
		return ResponseEntity
				.created(location)
				.header(token)
				.body(newUser);

	}
}
