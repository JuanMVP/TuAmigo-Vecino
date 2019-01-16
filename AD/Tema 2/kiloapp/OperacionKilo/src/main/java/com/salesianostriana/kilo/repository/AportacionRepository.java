package com.salesianostriana.kilo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.salesianostriana.kilo.model.Aportacion;
import com.salesianostriana.kilo.model.Campanya;
import com.salesianostriana.kilo.model.User;


@Repository
public interface AportacionRepository extends JpaRepository<Aportacion, Long>{

	@Query(value= "SELECT * FROM APORTACION WHERE USERS = ?1 AND CAMPANYA = ?2", nativeQuery = true)
	public List<Aportacion> allMyCampaignsContributions(User u, Campanya c);

}
