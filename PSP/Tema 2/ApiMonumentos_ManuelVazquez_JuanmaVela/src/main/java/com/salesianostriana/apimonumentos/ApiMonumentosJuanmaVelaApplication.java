package com.salesianostriana.apimonumentos;

import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.salesianostriana.apimonumentos.model.User;
import com.salesianostriana.apimonumentos.repository.UserRepository;

@SpringBootApplication
public class ApiMonumentosJuanmaVelaApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiMonumentosJuanmaVelaApplication.class, args);
	}
	
	
}
