package com.julioleal.pessoaconexo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.julioleal.pessoaconexo.domain.Cliente;
import com.julioleal.pessoaconexo.repositories.ClienteRepository;
import com.julioleal.pessoaconexo.security.UserSS;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{

	@Autowired
	private ClienteRepository repo;
	
	
	@Override
	public UserDetails loadUserByUsername(String nome) throws UsernameNotFoundException {
		Cliente cli = repo.findByNome(nome);
		if (cli ==null) {
			throw new UsernameNotFoundException(nome);
		}
		return new UserSS(cli.getId(), cli.getNome(), cli.getSenha(), cli.getPerfis());
	}

}
