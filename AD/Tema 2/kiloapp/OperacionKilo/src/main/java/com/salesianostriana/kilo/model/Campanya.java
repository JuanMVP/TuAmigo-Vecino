package com.salesianostriana.kilo.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;
import com.salesianostriana.proyectokilo.view.View;
import com.salesianostriana.proyectokilo.view.View.CampaignAportacion;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "CAMPAÑA")
@Data @NoArgsConstructor @AllArgsConstructor @EqualsAndHashCode(exclude= {"user", "alimento", "aportacion"})
public class Campanya{


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonView({View.CampaignJoin.class, View.CampaignList.class, View.CampaignMyList.class})
	@Column(name = "ID")
	private long id;
	
	@JsonView({View.CampaignJoin.class, View.CampaignList.class, View.CampaignMyList.class, CampaignAportacion.class})
	@Column(name = "NOMBRE")
	private String name;
	
	@JsonView({View.CampaignJoin.class, View.CampaignList.class, View.CampaignMyList.class})
	@Column(name = "DESCRIPCION")
	private String descripcion;
	
	@JsonView({View.CampaignJoin.class, View.CampaignList.class, View.CampaignMyList.class})
	@Column(name = "CODIGO")
	private String codigo;
	
	@JsonView(View.CampaignList.class)
	@Column(name = "UNIDO")
	private boolean unido;
	
	@ManyToMany
	@JoinColumn(name = "USER")
	private Set<User> user;
	
	@OneToMany(mappedBy = "campaña")
	private Set<TipoAlimento> alimento;
	
	@OneToMany(mappedBy = "campanya")
	private Set<Aportacion> aportacion;
	
	

	public Campanya(String name, String descripcion, String codigo, boolean unido, Set<User> user,
			Set<TipoAlimento> alimento, Set<Aportacion> aportacion) {
		super();
		this.name = name;
		this.descripcion = descripcion;
		this.codigo = codigo;
		this.unido = unido;
		this.user = user;
		this.alimento = alimento;
		this.aportacion = aportacion;
	}



	public Campanya(long id, String name, String descripcion, String codigo, boolean unido, Set<User> user) {
		this.id = id;
		this.name = name;
		this.descripcion = descripcion;
		this.codigo = codigo;
		this.unido = unido;
		this.user = user;
	}
	
	

	
	
}
