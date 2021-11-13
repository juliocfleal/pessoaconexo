package com.julioleal.pessoaconexo;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.julioleal.pessoaconexo.domain.Cliente;
import com.julioleal.pessoaconexo.domain.Pessoa;
import com.julioleal.pessoaconexo.repositories.ClienteRepository;
import com.julioleal.pessoaconexo.repositories.PessoaRepository;

@SpringBootApplication
public class PessoaconexoApplication implements CommandLineRunner {

	@Autowired
	private PessoaRepository pessoaRepository;
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	@Autowired
	private BCryptPasswordEncoder pe;
	
	
	public static void main(String[] args) {
		SpringApplication.run(PessoaconexoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		//Esse codigo permite o sistema inciar com instacias povoando a tabela
		Pessoa pessoa1 = new Pessoa("Joao", "123456789");
		Pessoa pessoa2 = new Pessoa("Maria", "987654321");
		Pessoa pessoa3 = new Pessoa("Jose", "121212121");
		
		Cliente leandro = new Cliente("Leandro", pe.encode("Conexo"));
		
		clienteRepository.saveAll(Arrays.asList(leandro));
		
		pessoaRepository.saveAll(Arrays.asList(pessoa1, pessoa2, pessoa3));
		
	}

}
