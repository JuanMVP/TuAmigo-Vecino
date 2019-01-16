package com.salesianostriana.dam.model;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "reserva")
public class Reserva {

	@GeneratedValue
	@Id
	private Long id_reserva;
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private LocalDateTime fechaInicio;
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private LocalDateTime fechaFin;

	@ManyToOne
	private Usuario usuario;

	@ManyToOne
	private Espacio espacio;

	public Reserva() {

	}

	public Reserva(Long id_reserva, LocalDateTime fechaInicio, LocalDateTime fechaFin, Usuario usuario,
			Espacio espacio) {
		super();
		this.id_reserva = id_reserva;
		this.fechaInicio = fechaInicio;
		this.fechaFin = fechaFin;
		this.usuario = usuario;
		this.espacio = espacio;
	}

	public Long getId_reserva() {
		return id_reserva;
	}

	public void setId_reserva(Long id_reserva) {
		this.id_reserva = id_reserva;
	}

	public LocalDateTime getFechaInicio() {
		return fechaInicio;
	}

	public void setFechaInicio(LocalDateTime fechaInicio) {
		this.fechaInicio = fechaInicio;
	}

	public LocalDateTime getFechaFin() {
		return fechaFin;
	}

	public void setFechaFin(LocalDateTime fechaFin) {
		this.fechaFin = fechaFin;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public Espacio getEspacio() {
		return espacio;
	}

	public void setEspacio(Espacio espacio) {
		this.espacio = espacio;
	}

	@Override
	public String toString() {
		return "Reserva [id_reserva=" + id_reserva + ", fechaInicio=" + fechaInicio + ", fechaFin=" + fechaFin
				+ ", usuario=" + usuario + ", espacio=" + espacio + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((espacio == null) ? 0 : espacio.hashCode());
		result = prime * result + ((fechaFin == null) ? 0 : fechaFin.hashCode());
		result = prime * result + ((fechaInicio == null) ? 0 : fechaInicio.hashCode());
		result = prime * result + ((id_reserva == null) ? 0 : id_reserva.hashCode());
		result = prime * result + ((usuario == null) ? 0 : usuario.hashCode());
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
		Reserva other = (Reserva) obj;
		if (espacio == null) {
			if (other.espacio != null)
				return false;
		} else if (!espacio.equals(other.espacio))
			return false;
		if (fechaFin == null) {
			if (other.fechaFin != null)
				return false;
		} else if (!fechaFin.equals(other.fechaFin))
			return false;
		if (fechaInicio == null) {
			if (other.fechaInicio != null)
				return false;
		} else if (!fechaInicio.equals(other.fechaInicio))
			return false;
		if (id_reserva == null) {
			if (other.id_reserva != null)
				return false;
		} else if (!id_reserva.equals(other.id_reserva))
			return false;
		if (usuario == null) {
			if (other.usuario != null)
				return false;
		} else if (!usuario.equals(other.usuario))
			return false;
		return true;
	}

}
