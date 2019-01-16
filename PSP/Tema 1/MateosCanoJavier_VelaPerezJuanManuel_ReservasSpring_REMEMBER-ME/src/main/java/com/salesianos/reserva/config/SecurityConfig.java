package com.salesianos.reserva.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {    
	
	@Autowired
	UserDetailsService userDetailsService;

	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	};

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		// @formatter:off
		
		http.csrf().disable();
		http.headers().frameOptions().disable();

		http.authorizeRequests().antMatchers("/h2-console/**").permitAll() // Para permitir la consola de H2
		.antMatchers(
                "/",
                "/js/**",
                "/css/**",
                "/img/**",
                "/webjars/**").permitAll()
				.antMatchers("/*").permitAll() // Para permitir el acceso al formulario de login
				.anyRequest().permitAll()// authenticated() // El resto de peticiones, autenticadas.
				.antMatchers("/resources/**").permitAll().and().formLogin().loginPage("/") // Ruta del controlador
																								// del formulario de
																								// login
				.defaultSuccessUrl("/cp_admin") // Ruta de redirección en caso de éxito.
				.loginProcessingUrl("/login") // Ruta de procesamiento del formulario de login.
				.failureUrl("/login?error=true") // Ruta en caso de error de login.
				.and().logout().logoutSuccessUrl("/login?logout") // por defecto POST a /logout
			
				.and()
				.logout().deleteCookies("JSESSIONID")
				
				.and()
				.rememberMe().key("uniqueAndSecret");
		// @formatter:on

	}
}