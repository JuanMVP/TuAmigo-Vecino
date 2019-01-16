package com.salesianostriana.dam.model;

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
@Table(name = "usuario")
public class Usuario {
	

	
	@Column(name = "ENABLED")
	private boolean enabled;
	
	@Id
	@Column(name = "USER")
	private String user;
	
	@Column(name = "CONTRASENA")
	private String contrasena;
	
	@OneToMany(mappedBy="usuario")
	Set<Reserva> listaReservas = new HashSet<Reserva>();
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
	private Set<Authorities> authorities = new HashSet<>();
	
	public Usuario() {
		
	}

	
	public boolean isEnabled() {
		return enabled;
	}


	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}


	public String getUser() {
		return user;
	}


	public void setUser(String user) {
		this.user = user;
	}


	public String getContrasena() {
		return contrasena;
	}


	public void setContrasena(String contrasena) {
		this.contrasena = contrasena;
	}


	public Set<Reserva> getListaReservas() {
		return listaReservas;
	}


	public void setListaReservas(Set<Reserva> listaReservas) {
		this.listaReservas = listaReservas;
	}


	public Set<Authorities> getAuthorities() {
		return authorities;
	}


	public void setAuthorities(Set<Authorities> authorities) {
		this.authorities = authorities;
	}


	public Usuario(boolean enabled, String user, String contrasena, Set<Reserva> listaReservas,
			Set<Authorities> authorities) {
		super();
		this.enabled = enabled;
		this.user = user;
		this.contrasena = contrasena;
		this.listaReservas = listaReservas;
		this.authorities = authorities;
	}


	@Override
	public String toString() {
		return "Usuario [enabled=" + enabled + ", user=" + user + ", contrasena=" + contrasena + ", listaReservas="
				+ listaReservas + ", authorities=" + authorities + "]";
	}




	//Helper
	public void addReserva(Reserva r) {
		if (r != null) {
			r.setUsuario(this);
			this.getListaReservas().add(r);
		}
	}

	public void removeReserva(Reserva r) {
		if (r != null) {
			r.setUsuario(null);
			this.getListaReservas().remove(r);
		}
	}

}
