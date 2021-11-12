package com.julioleal.pessoaconexo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.julioleal.pessoaconexo.domain.Pessoa;
import com.julioleal.pessoaconexo.repositories.PessoaRepository;
import com.julioleal.pessoaconexo.services.exeptions.ObjectNotFoundException;

@Service
public class PessoaService {

	@Autowired
	private PessoaRepository repo;
	
	
	//Caso a requisicao nao encontre o id, uma exessao personalizada e lacanda
	public Pessoa buscar(Integer id) {
	Optional<Pessoa> obj = repo.findById(id);
	return obj.orElseThrow(() -> new ObjectNotFoundException(
			 "Pessoa não encontrada! Id: " + id ));
	}
}
