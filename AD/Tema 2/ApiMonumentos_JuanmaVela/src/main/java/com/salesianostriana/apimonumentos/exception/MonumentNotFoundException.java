package com.salesianostriana.apimonumentos.exception;

public class MonumentNotFoundException extends RuntimeException {

	
		 public MonumentNotFoundException(Long id){
			super("No se puede encontrar el monumento " + id);
		}
}
