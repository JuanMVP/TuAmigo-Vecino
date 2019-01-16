package com.salesianostriana.kilo.service;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data @AllArgsConstructor
public class CampanyaResponse {
	
	private long id;
	private String nombre;
	private String descripcion;
	private String codigo;

}
