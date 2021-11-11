package com.julioleal.pessoaconexo.resources;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.julioleal.pessoaconexo.domain.Pessoa;

@RestController
@RequestMapping(value="/pessoa")
public class PessoaResource {
	
	
	@RequestMapping(method=RequestMethod.GET)
	public Pessoa pessoa() {
		return new Pessoa("Julio", "1234321");
	}

	
}
