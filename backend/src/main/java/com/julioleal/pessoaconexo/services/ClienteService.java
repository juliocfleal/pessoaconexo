package com.julioleal.pessoaconexo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.julioleal.pessoaconexo.DTO.ClienteDTO;
import com.julioleal.pessoaconexo.domain.Cliente;
import com.julioleal.pessoaconexo.repositories.ClienteRepository;
import com.julioleal.pessoaconexo.services.exeptions.ObjectNotFoundException;

@Service
public class ClienteService {

	
	@Autowired
	private BCryptPasswordEncoder pe;
	
	@Autowired
	private ClienteRepository repo;

	public Cliente buscar(Integer id) {
		Optional<Cliente> obj = repo.findById(id);
		// Caso a requisicao nao encontre o id, uma exessao personalizada e lacanda
		return obj.orElseThrow(() -> new ObjectNotFoundException("Cliente não encontrado! Id: " + id));
	}

	public Cliente adicionar(Cliente obj) {
		obj.setId(null);
		return repo.save(obj);
	}

	public Cliente atualizar(Cliente obj) {
		buscar(obj.getId());
		return repo.save(obj);
	}

	public void deletar(Integer id) {
		buscar(id);
		repo.deleteById(id);
	}

	public List<Cliente> buscarClientes() {
		return repo.findAll();
	}

	// Transforma a entidade em DTO
	public Cliente fromDTO(ClienteDTO objDTO) {
		return new Cliente(objDTO.getId(), objDTO.getNome(), pe.encode(objDTO.getSenha()));

	}
}
