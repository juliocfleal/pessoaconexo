package com.julioleal.pessoaconexo.security;

import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.julioleal.pessoaconexo.domain.Perfil;

public class UserSS implements UserDetails {
	private static final long serialVersionUID = 1L;

	private Integer id;
	private String nome;
	private String senha;
	private Collection<? extends GrantedAuthority> authorities;

	public UserSS() {

	}

	public UserSS(Integer id, String nome, String senha, Set<Perfil> perfis) {
		super();
		this.id = id;
		this.nome = nome;
		this.senha = senha;
		this.authorities = perfis.stream().map(x -> new SimpleGrantedAuthority(x.getDescricao())).collect((Collectors.toList()));
		}

	public Integer getId() {
		return id;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public String getPassword() {
		return senha;
	}

	@Override
	public String getUsername() {
		return nome;
	}

	@Override
	public boolean isAccountNonExpired() {
		// Por padrao a conta nao expirara
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// Por padrao a conta nao fica bloqueada
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// Por padrao a conta nao expirara
		return true;
	}

	@Override
	public boolean isEnabled() {
		// Por padrao o usuario esta ativo
		return true;
	}

}
