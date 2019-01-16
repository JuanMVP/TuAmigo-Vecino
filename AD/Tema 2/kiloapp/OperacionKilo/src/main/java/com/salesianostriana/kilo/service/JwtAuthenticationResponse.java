package com.salesianostriana.kilo.service;

import java.io.Serializable;

import com.salesianostriana.kilo.model.Authority;


public class JwtAuthenticationResponse implements Serializable {

    private static final long serialVersionUID = 1250166508152483573L;

    private final String token;
    private final String username;
    private final String role;

    public JwtAuthenticationResponse(String token,String username, String role) {
        this.token = token;
        this.username=username;
        this.role=role;
    }

    public String getToken() {
        return this.token;
    }

	public String getUsername() {
		return username;
	}

	public String getRole() {
		return role;
	}
    
    
}
