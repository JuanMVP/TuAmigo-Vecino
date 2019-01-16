package com.salesianostriana.kilo.model;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonView;
import com.salesianostriana.proyectokilo.view.View;

import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name="APORTACION")
@Data @NoArgsConstructor
@Entity
public class Aportacion {
	
	
	@Id
	@JsonView(View.CampaignAportacion.class)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private long id;
	
	@Column(name="CANTIDAD")
	@JsonView(View.CampaignAportacion.class)
	private String cantidad;
	
	@Column(name="FECHA")
	@DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm")
	private LocalDateTime time;
	
	@ManyToOne
	@JsonView(View.CampaignAportacion.class)
	@JoinColumn(name="aportacion")
	private TipoAlimento tipoAlimento;
	

	@ManyToOne
	@JsonView(View.CampaignAportacion.class)
	@JoinColumn(name="campanya")
	private Campanya campanya;
	
	
	@ManyToOne
	@JoinColumn(name = "users")
	@JsonView(View.CampaignAportacion.class)
	private User users;

	public Aportacion(String cantidad, LocalDateTime time, TipoAlimento tipoAlimento, Campanya campanya,
			User users) {
		super();
		this.cantidad = cantidad;
		this.time = time;
		this.tipoAlimento = tipoAlimento;
		this.campanya = campanya;
		this.users = users;
	}

	

	

	
	
	
	

}
