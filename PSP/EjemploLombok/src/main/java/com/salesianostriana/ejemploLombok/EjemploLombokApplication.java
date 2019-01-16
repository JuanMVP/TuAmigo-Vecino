package com.salesianostriana.ejemploLombok;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class EjemploLombokApplication {

	public static void main(String[] args) {
		SpringApplication.run(EjemploLombokApplication.class, args);
		
	
		
	}
	
	@Bean
	public CommandLineRunner init(){
		return args ->{
			
			User usuario = new User();
			usuario.setNombre("Juanma");
			usuario.setPrimerApellido("Vela");
			
			System.out.println(usuario.toString());
			
			User otro = new User.UserBuilder()
					.id(7);
			
		};
			
			
	}
}
