package com.salesianostriana.apimonumentos.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data @NoArgsConstructor 
@Table (name="authorities")
public class Authorities {
	
	@Id
	@Column(name = "AUTHORITY")
	private String authority;
	

	@JoinColumn(name = "USERNAME")
	@ManyToOne
	private User username;


	
	public Authorities(String authority, User username) {
		this.authority = authority;
		this.username = username;
	}
	
	
	
}	
	
	