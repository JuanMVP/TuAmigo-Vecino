package com.salesianostriana.kilo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.salesianostriana.kilo.model.User;



@SpringBootApplication
public class OperacionKiloApplication {

	public static void main(String[] args) {
		SpringApplication.run(OperacionKiloApplication.class, args);
	}

}
