package com.salesianostriana.kilo.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.springframework.security.core.GrantedAuthority;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name = "AUTHORITY")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,
property = "id")
public class Authority implements GrantedAuthority {
	

	    @Id
	    @Column(name = "ID")
	    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "authority_seq")
	    @SequenceGenerator(name = "authority_seq", sequenceName = "authority_seq", allocationSize = 1)
	    private Long id;

	    @Column(name = "NAME", length = 50)
	    @NotNull
	    @Enumerated(EnumType.STRING)
	    private AuthorityName name;
	    
	    //@JsonManagedReference
	    @ManyToOne(cascade=CascadeType.ALL)
	    @JoinColumn(name="authorities")
	    private User users;
	    
	    public Authority() {
	    	
	    }
	    

	    public Authority(@NotNull AuthorityName name, User users) {
			super();
			this.name = name;
			this.users = users;
		}

		public Long getId() {
	        return id;
	    }

	    public void setId(Long id) {
	        this.id = id;
	    }

	    public AuthorityName getName() {
	        return name;
	    }

	    public void setName(AuthorityName name) {
	        this.name = name;
	    }

	    public User getUsers() {
	        return users;
	    }

	    public void setUsers(User users) {
	        this.users = users;
	    }


		@Override
		public String getAuthority() {
			return name.name();
		}
}
