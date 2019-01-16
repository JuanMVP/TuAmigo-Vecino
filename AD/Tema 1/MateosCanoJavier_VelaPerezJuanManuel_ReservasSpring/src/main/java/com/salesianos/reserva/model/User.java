package com.salesianos.reserva.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "USER")
public class User {
	
	@Id
	@Column(name = "USERNAME")
	private String username;
	
	@Column(name = "LASTNAME")
	private String lastname;
	
	@Column(name = "EMAIL")
	private String email;
	
	@Column(name = "PASSWORD")
	private String password;
	
	@Column(name = "ENABLED")
	private boolean enabled;
	
	@OneToMany(mappedBy="username")
	Set<Reserva> listaReservas= new HashSet<Reserva>();
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "username")
	private Set<Authorities> authorities = new HashSet<>();
	
	public User() {
		
	}

	public User(String username, String password, boolean enabled, Set<Reserva> listaReservas,
			Set<Authorities> authorities) {
		super();
		this.username = username;
		this.password = password;
		this.enabled = enabled;
		this.authorities = authorities;
	}


	
	public User(String username, String lastname, String email, String password, boolean enabled,
			Set<Reserva> listaReservas, Set<Authorities> authorities) {
		super();
		this.username = username;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
		this.enabled = enabled;
		this.listaReservas = listaReservas;
		this.authorities = authorities;
	}

	public String getUsername() {
		return username;
	}



	public void setUsername(String username) {
		this.username = username;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public Set<Reserva> getListaReservas() {
		return listaReservas;
	}



	public void setListaAulas(Set<Reserva> listaReservas) {
		this.listaReservas = listaReservas;
	}
	
	



	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	



	@Override
	public String toString() {
		return "User [username=" + username + ", lastname=" + lastname + ", email=" + email + ", password=" + password
				+ ", enabled=" + enabled + ", listaReservas=" + listaReservas + ", authorities=" + authorities + "]";
	}

	public boolean isEnabled() {
		return enabled;
	}


	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}


	public Set<Authorities> getAuthorities() {
		return authorities;
	}


	public void setAuthorities(Set<Authorities> authorities) {
		this.authorities = authorities;
	}




}
