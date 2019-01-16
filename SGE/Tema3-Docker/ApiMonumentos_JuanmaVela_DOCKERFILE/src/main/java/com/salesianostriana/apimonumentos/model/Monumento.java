package com.salesianostriana.apimonumentos.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data //@NoArgsConstructor 
@Entity
public class Monumento {
	@Id
	@GeneratedValue
	public Long id;
	public String codigoPais;
	public String nombrePais;
	public String nombreCiudad;
	public String localizacion;
	public String nombreMonumento;
	public String descripcion;
	public String urlImagen;
	
	
	public Monumento(String codigoPais, String nombrePais, String nombreCiudad, String localizacion,
			String nombreMonumento, String descripcion, String urlImagen) {
		this.codigoPais = codigoPais;
		this.nombrePais = nombrePais;
		this.nombreCiudad = nombreCiudad;
		this.localizacion = localizacion;
		this.nombreMonumento = nombreMonumento;
		this.descripcion = descripcion;
		this.urlImagen = urlImagen;
	}
	
	
	
	

}
