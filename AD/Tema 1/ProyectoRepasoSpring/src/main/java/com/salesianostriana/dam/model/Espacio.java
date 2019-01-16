package com.salesianostriana.dam.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "espacio")
public class Espacio {
	@GeneratedValue
	@Id
	private Long id;
	private String tipoEspacio;

	@OneToMany(mappedBy = "espacio")
	Set<Reserva> listaReservas = new HashSet<Reserva>();

	public Espacio() {

	}

	public Espacio(Long id, String tipoEspacio, Set<Reserva> listaReservas) {
		super();
		this.id = id;
		this.tipoEspacio = tipoEspacio;
		this.listaReservas = listaReservas;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTipoEspacio() {
		return tipoEspacio;
	}

	public void setTipoEspacio(String tipoEspacio) {
		this.tipoEspacio = tipoEspacio;
	}

	public Set<Reserva> getListaReservas() {
		return listaReservas;
	}

	public void setListaReservas(Set<Reserva> listaReservas) {
		this.listaReservas = listaReservas;
	}

	@Override
	public String toString() {
		return "Espacio [id=" + id + ", tipoEspacio=" + tipoEspacio + ", listaReservas=" + listaReservas + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((tipoEspacio == null) ? 0 : tipoEspacio.hashCode());
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
		Espacio other = (Espacio) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (tipoEspacio == null) {
			if (other.tipoEspacio != null)
				return false;
		} else if (!tipoEspacio.equals(other.tipoEspacio))
			return false;
		return true;
	}

	// Helper

	public void addReserva(Reserva r) {
		if (r != null) {
			r.setEspacio(this);
			this.getListaReservas().add(r);
		}
	}

	public void removeReserva(Reserva r) {
		if (r != null) {
			r.setEspacio(null);
			this.getListaReservas().remove(r);
		}
	}

}
