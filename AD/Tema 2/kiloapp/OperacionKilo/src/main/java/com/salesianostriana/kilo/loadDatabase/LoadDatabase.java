package com.salesianostriana.kilo.loadDatabase;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.salesianostriana.kilo.model.TipoAlimento;
import com.salesianostriana.kilo.model.User;

import lombok.extern.slf4j.Slf4j;

@Configuration
@Slf4j
public class LoadDatabase {
	
	@Bean
	public CommandLineRunner initDatabase() {
		return args -> {
			
			
		};
	}

}