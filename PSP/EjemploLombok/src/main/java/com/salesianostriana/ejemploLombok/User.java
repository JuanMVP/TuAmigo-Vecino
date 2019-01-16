package com.salesianostriana.ejemploLombok;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class User {
	
	private long id;
	private String nombre;
	private String primerApellido;
	private String segundoApellido;
	private String email;
	private String telefono;
	private boolean activo;

}
