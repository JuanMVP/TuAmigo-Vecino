package com.salesianos.reserva.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Proxy;
@Proxy(lazy = false)
@Entity
@Table(name = "aula")
public class Aula {


	@Id
	@GeneratedValue
	private Long id;
	@Column(name = "NAME")
	private String name;
	
	/*@ManyToOne
	private User username;*/
	
	@OneToMany
	Set<Reserva> listaReservas= new HashSet<>();
	
	public Aula() {
		super();
	}

	

	
	public Aula(String name) {
		this.name=name;
	}
	

	public Aula(long id, String name,  Set<Reserva> listaReservas) {
		super();
		this.id = id;
		this.name = name;
		//this.username = username;
		this.listaReservas = listaReservas;
	}







	







	public void setId(long id) {
		this.id = id;
	}







	

	public String getName() {
		return name;
	}




	public void setName(String name) {
		this.name = name;
	}




	public Set<Reserva> getListaReservas() {
		return listaReservas;
	}

	public void setListaReservas(Set<Reserva> listaReservas) {
		this.listaReservas = listaReservas;
	}







	@Override
	public String toString() {
		return "Aula [id=" + id + ", name=" + name + ", username="/* + username */+ ", listaReservas=" + listaReservas
				+ "]";
	}







	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		result = prime * result + ((listaReservas == null) ? 0 : listaReservas.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		//result = prime * result + ((username == null) ? 0 : username.hashCode());
		return result;
	}







	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Aula other = (Aula) obj;
		if (id != other.id)
			return false;
		if (listaReservas == null) {
			if (other.listaReservas != null)
				return false;
		} else if (!listaReservas.equals(other.listaReservas))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		/*if (username == null) {
			if (other.username != null)
				return false;
		} else if (!username.equals(other.username))
			return false;*/
		return true;
	}

	
}
