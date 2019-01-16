package com.salesianostriana.kilo.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.salesianostriana.kilo.model.Campanya;
import com.salesianostriana.kilo.model.TipoAlimento;
import com.salesianostriana.kilo.model.User;
import com.salesianostriana.kilo.repository.CampanyaRepository;
import com.salesianostriana.kilo.repository.TipoAlimentoRepository;

@Service
public class CampanyaService {
	
	@Autowired
	private CampanyaRepository repository;
	
	@Autowired
	private TipoAlimentoRepository alimentoRepo;
	
	public Campanya save(Campanya c) {
		return repository.save(c);
	}
	
	public Campanya findOne (Long id) {
		return repository.findById(id).orElse(null);
	}
	
	
	
	public List<CampanyaResponse> findCampaigns() {
		return toCampaignResponse(repository.findAll());
	}
	
	public List<CampanyaResponse> toCampaignResponse(List<Campanya> l) {
		List<CampanyaResponse> cResp = new ArrayList<CampanyaResponse>();
		for (Campanya ca : l) {
			CampanyaResponse c = new CampanyaResponse(ca.getId(), ca.getName(), ca.getDescripcion(), ca.getCodigo());
			cResp.add(c);
		}
		return cResp;
	}
	
	public Set<Campanya> setUnido(User u) {
		Set<Campanya> userListCampaign = u.getCampaña();
		List<Campanya> listCampaign = repository.findAll();
		Set<Campanya> listaResultado = new HashSet<>();

		for (Campanya c : listCampaign) {

			if (userListCampaign.contains(c))
				c.setUnido(true);

			listaResultado.add(c);

		}

		return listaResultado;
	}
	
	public Optional<Campanya> buscarPorCodigo(String codigo) {

		return repository.findByCodigo(codigo);
	}
	
	public void delete (Long id) {
		repository.deleteById(id);
	}
	
	

}
