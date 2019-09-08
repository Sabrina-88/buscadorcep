import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cep } from '../Model-Mockup/cepModel';
//import 'rxjs/add/operator/toPromise';


@Injectable({
	providedIn: 'root'
})
export class CepService {

	constructor(private http: HttpClient) { }

	buscar(cep: string) { //funcao de bucar o cep na api
		return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
		.toPromise()
		.then(response => {
			return this.converterRespostaParaCep(response)
		});
	}

	private converterRespostaParaCep(cepNaResposta): Cep{
		let cep = new Cep();
		cep.cep = cepNaResposta.cep;
		cep.logradouro = cepNaResposta.logradouro;
		cep.complemento = cepNaResposta.complemento;
		cep.bairro = cepNaResposta.bairro;
		cep.cidade = cepNaResposta.localidade;
		cep.estado = cepNaResposta.uf;
		return cep;
	}
}
