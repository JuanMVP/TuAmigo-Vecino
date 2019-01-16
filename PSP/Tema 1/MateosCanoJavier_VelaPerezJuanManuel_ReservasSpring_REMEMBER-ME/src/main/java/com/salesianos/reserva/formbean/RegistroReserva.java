package com.salesianos.reserva.formbean;

public class RegistroReserva {

	private Long idReserva;
	private String fechaInicio;
	private String fechaFin;
	private String espacio;
	public RegistroReserva() {
		super();
	}
	public RegistroReserva(Long idReserva, String fechaInicio, String fechaFin, String espacio) {
		super();
		this.idReserva = idReserva;
		this.fechaInicio = fechaInicio;
		this.fechaFin = fechaFin;
		this.espacio = espacio;
	}
	public Long getIdReserva() {
		return idReserva;
	}
	public void setIdReserva(Long idReserva) {
		this.idReserva = idReserva;
	}
	public String getFechaInicio() {
		return fechaInicio;
	}
	public void setFechaInicio(String fechaInicio) {
		this.fechaInicio = fechaInicio;
	}
	public String getFechaFin() {
		return fechaFin;
	}
	public void setFechaFin(String fechaFin) {
		this.fechaFin = fechaFin;
	}
	public String getEspacio() {
		return espacio;
	}
	public void setEspacio(String espacio) {
		this.espacio = espacio;
	}
	@Override
	public String toString() {
		return "RegistroReserva [idReserva=" + idReserva + ", fechaInicio=" + fechaInicio + ", fechaFin=" + fechaFin
				+ ", espacio=" + espacio + "]";
	}
	
	
	
	
	
}
