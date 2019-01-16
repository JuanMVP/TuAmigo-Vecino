package com.salesianostriana.kilo.model;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.salesianostriana.proyectokilo.view.View;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "USERS")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,
property = "id")
@Data @NoArgsConstructor
public class User implements UserDetails {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private long id;
	
	@Column(name = "USERNAME")
	@JsonView(View.CampaignAportacion.class)
	private String username;
	
	@Column(name = "PASSWORD", nullable = false)
	private String password;

	@Column (name = "EMAIL")
	private String email;
	
	@Column (name = "GRUPO")
	private String grupo;
	

	
	@Column(name = "ENABLED")
    private Boolean enabled;
	
	
	@Column(name = "LASTPASSWORDRESETDATE")
    @Temporal(TemporalType.TIMESTAMP)
    private Date lastPasswordResetDate;
	
	//@JsonBackReference
	@OneToMany(mappedBy="users", fetch = FetchType.EAGER)
//    private List<Authority> authorities;
	private List<Authority> authorities = new ArrayList<>();
	
	
	@ManyToMany(mappedBy = "user")
	private Set<Campanya> campaña = new HashSet<>();
	
	@OneToMany(mappedBy = "users")
	private Set<Aportacion> aportacion = new HashSet<>();
	
	

	








	
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}



	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}





	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}







	
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}








	@Override
	public List<Authority> getAuthorities() {
		// TODO Auto-generated method stub
		return authorities;
	}








	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return password;
	}








	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return this.username;
	}



	public User(long id, String username, String password, String email, String grupo, Boolean enabled,
			Date lastPasswordResetDate, List<Authority> authorities, Set<Campanya> campaña) {
		this.id = id;
		this.username = username;
		this.password = password;
		this.email = email;
		this.grupo = grupo;
		this.enabled = enabled;
		this.lastPasswordResetDate = lastPasswordResetDate;
		this.authorities = authorities;
		this.campaña = campaña;
	}




	
	
	
	
	
	
	

}

	
	
	
	

