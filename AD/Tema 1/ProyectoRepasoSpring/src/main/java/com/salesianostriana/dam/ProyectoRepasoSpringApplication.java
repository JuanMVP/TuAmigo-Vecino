package com.salesianostriana.dam;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.salesianostriana.dam.model.Authorities;
import com.salesianostriana.dam.model.Espacio;
import com.salesianostriana.dam.model.Usuario;
import com.salesianostriana.dam.services.EspacioService;
import com.salesianostriana.dam.services.ReservaService;
import com.salesianostriana.dam.services.UsuarioService;

@SpringBootApplication
public class ProyectoRepasoSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProyectoRepasoSpringApplication.class, args);
	}

	@Bean
	public CommandLineRunner insertInitialData(UsuarioService serviceU, ReservaService serviceR, EspacioService serviceE) {
		return args -> {

			/*Usuario u1 = new Usuario();
			u1.setNombre("Pepe");
			u1.setUser("pepe1");
			u1.setContrasena("1234");
			
			Authorities a1 = new Authorities();
			a1.setAuthority("ROL_USER");
			a1.setUser(u1);
			
			
			serviceU.save(u1);

			Usuario u2 = new Usuario();
			u2.setNombre("admin");
			u2.setUser("admin");
			u2.setContrasena("admin");
			

			Authorities a2 = new Authorities();
			a2.setAuthority("ROL_ADMIN");
			a2.setUser(u2);

			
			serviceU.save(u2);
	*/

			

			Espacio esp1 = new Espacio();
			esp1.setTipoEspacio("sala de ordenadores");
			serviceE.save(esp1);

		};
	}

}
