package com.julioleal.pessoaconexo.DTO;

import java.io.Serializable;

import com.julioleal.pessoaconexo.domain.Pessoa;
import javax.validation.constraints.NotEmpty;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.br.CPF;

public class PessoaDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Integer id;
	
	//Validacao de preenchimento do campo
	@NotEmpty(message = "Preenchimento obrigatorio")
	@Length(min = 5, max = 80, message = "O tamanho deve ser entre 5 e 80 caracteres.")
	private String nome;
	
	
	//Validacao de CPF e de preenchimento do campo
	@NotEmpty(message = "Preenchimento obrigatorio")
	@CPF
	private String cpf;

	public PessoaDTO() {

	}

	public PessoaDTO(Pessoa obj) {
		id = obj.getId();
		nome = obj.getNome();
		setCpf(obj.getCpf());
	}

	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

}
