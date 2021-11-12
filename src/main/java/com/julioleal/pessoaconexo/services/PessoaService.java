package com.julioleal.pessoaconexo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.julioleal.pessoaconexo.domain.Pessoa;
import com.julioleal.pessoaconexo.repositories.PessoaRepository;

@Service
public class PessoaService {

	@Autowired
	private PessoaRepository repo;
	
	public Pessoa buscar(Integer id) {
	Optional<Pessoa> obj = repo.findById(id);
	return obj.orElse(null);
	}
}
