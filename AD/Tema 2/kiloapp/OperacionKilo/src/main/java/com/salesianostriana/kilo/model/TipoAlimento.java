package com.salesianostriana.kilo.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;
import com.salesianostriana.proyectokilo.view.View;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
@Entity
@Table(name="DATAMASTER")
@Data @NoArgsConstructor @EqualsAndHashCode(exclude= { "aportacion"})
public class TipoAlimento {

	@Id
	@JsonView(View.DataMasterList.class)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private long id;
	
	@Column(name = "NOMBRE_TIPO")
	@JsonView({View.CampaignAportacion.class ,  View.DataMasterList.class})
	private String nombreTipo;
	
	@ManyToOne
	@JsonView({View.CampaignList.class ,  View.DataMasterList.class})
	@JoinColumn(name="campaña")
	private Campanya campaña;
	
	@OneToMany(mappedBy="tipoAlimento")
	private Set<Aportacion> aportacion;

	public TipoAlimento(String nombreTipo, Campanya campaña, Set<Aportacion> aportacion) {
		super();
		this.nombreTipo = nombreTipo;
		this.campaña = campaña;
		this.aportacion = aportacion;
	}
	
	public TipoAlimento(String nombreTipo, Campanya campaña) {
		this.nombreTipo=nombreTipo;
		this.campaña=campaña;
	}

	

	
	
	
}
