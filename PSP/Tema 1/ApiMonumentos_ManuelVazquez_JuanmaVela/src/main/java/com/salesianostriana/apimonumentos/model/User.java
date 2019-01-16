package com.salesianostriana.apimonumentos.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data @NoArgsConstructor @AllArgsConstructor
@Table(name = "USER")
public class User {
	
	@Id
	@Column(name = "USERNAME")
	private String username;
	
	
	
	@Column(name = "PASSWORD")
	private String password;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "username")
	private Set<Authorities> authorities = new HashSet<>();
	
	
	
	

	


	
	

	public String getUsername() {
		return username;
	}



	public void setUsername(String username) {
		this.username = username;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public User(String username, String password) {
		this.username = username;
		this.password = password;
	}



	


	


	
	
	



	

	

	



	


	



}
