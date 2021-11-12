package com.julioleal.pessoaconexo.services;

import java.util.List;
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
	
	
	public Pessoa buscar(Integer id) {
	Optional<Pessoa> obj = repo.findById(id);
	//Caso a requisicao nao encontre o id, uma exessao personalizada e lacanda
	return obj.orElseThrow(() -> new ObjectNotFoundException(
			 "Pessoa não encontrada! Id: " + id ));
	}
	 public Pessoa adicionar(Pessoa obj) {
		 obj.setId(null);
		 return repo.save(obj);
	 }
	 
	 public Pessoa atualizar(Pessoa obj) {
		 buscar(obj.getId());
		 return repo.save(obj);
	 }
	
	 public void deletar(Integer id) {
		 buscar(id);
		 repo.deleteById(id);
	 }
	 
	 public List<Pessoa> buscarPessoas(){
		 return repo.findAll();
	 }
}
