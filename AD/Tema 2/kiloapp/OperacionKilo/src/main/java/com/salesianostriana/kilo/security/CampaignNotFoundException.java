package com.salesianostriana.kilo.security;

public class CampaignNotFoundException extends RuntimeException {
	
	public CampaignNotFoundException(String codigo){
		super("No se pudo encontrar la campaña con el codigo" + codigo);
	}

}
