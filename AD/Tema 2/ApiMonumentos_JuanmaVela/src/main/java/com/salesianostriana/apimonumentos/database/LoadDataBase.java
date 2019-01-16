package com.salesianostriana.apimonumentos.database;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.salesianostriana.apimonumentos.model.Monumento;
import com.salesianostriana.apimonumentos.repository.MonumentoRepository;

import lombok.extern.slf4j.Slf4j;

@Configuration
@Slf4j
public class LoadDataBase {
	
	@Bean
	public CommandLineRunner initDatabase(MonumentoRepository repository) { 
		return args ->{
			log.info("Preloading " + repository.save(new Monumento("ES", "España","Sevilla","","Giralda", "Monumento de Sevilla","http:....")));
			log.info("Preloading " + repository.save(new Monumento("FR", "Francia","Paris","","Torre Eifel", "Monumento de Paris","http:....")));
		};
	}

}
