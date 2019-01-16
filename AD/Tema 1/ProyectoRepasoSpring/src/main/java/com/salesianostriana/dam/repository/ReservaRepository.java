package com.salesianostriana.dam.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.salesianostriana.dam.model.Reserva;
@Repository
public interface ReservaRepository extends JpaRepository<Reserva, Long> {

	@Query(nativeQuery = true, value = "SELECT * FROM ESPACIO JOIN RESERVA ON (ESPACIO.ID = RESERVA.ESPACIO_ID) JOIN USUARIO ON (RESERVA.USUARIO_USER = USUARIO.USER) WHERE USUARIO.USER = ?1")
	Iterable<Reserva> findEspaciosReservadosPorMiUsuario(String user);
}
