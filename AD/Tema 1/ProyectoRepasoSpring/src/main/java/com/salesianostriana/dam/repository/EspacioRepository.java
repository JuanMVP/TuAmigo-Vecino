package com.salesianostriana.dam.repository;

import java.time.LocalDateTime;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.salesianostriana.dam.model.Espacio;

@Repository
public interface EspacioRepository extends JpaRepository<Espacio, Long> {

	@Query(nativeQuery = true, value = "SELECT * FROM ESPACIO LEFT JOIN RESERVA ON (ESPACIO.ID = RESERVA.ESPACIO_ID) WHERE (:inicio NOT BETWEEN FECHAINICIO AND FECHAFIN AND :fin NOT BETWEEN FECHAINICIO AND FECHAFIN AND NOT(:inicio <= FECHAINICIO AND :fin  >= FECHAFIN) AND TIPOESPACIO LIKE :tipoEspacio) OR FECHAINICIO IS NULL AND TIPOESPACIO LIKE :tipoEspacio")
	Iterable<Espacio> findEspaciosNoReservados(@Param("inicio") LocalDateTime inicio, @Param("fin") LocalDateTime fin,
			@Param("tipoEspacio") String tipoEspacio);

	@Query(nativeQuery = true, value = "SELECT ESPACIO.TIPOESPACIO, RESERVA.FECHAINICIO, RESERVA.FECHAFIN, USUARIO.ID FROM ESPACIO JOIN RESERVA  ON (ESPACIO.ID = RESERVA.ESPACIO_ID) JOIN USUARIO ON (RESERVA.USUARIO_ID = USUARIO.ID) WHERE USUARIO.ID = ?1")
	Iterable<Espacio> findEspaciosReservadosPorMiUsuario(Long id_usuario);

}
