import { Component, OnInit } from '@angular/core';
import { CepService } from '../../Service/cep-service.service';
import { Cep } from '../../Model-Mockup/cepModel';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public resultContainer: boolean = false
    public cep = new Cep();
  constructor( private cepService: CepService) { }

  ngOnInit() {
  }
  search(){
    this.cepService.buscar(this.cep.cep)
      .then((cep:Cep) => {
      
        this.resultContainer = true
    this.cep = cep;
    
        console.log('correto')
      })
    
      .catch(() => {
        this.resultContainer = false;
    let inputCep = this.cep.cep;
    let regex = /[a-zA-Z ]/g;
    let result = inputCep.match(regex);
    if (result){
      alert('Digite somente números.');
      console.log("voce digitou letra>>> ", result);
    } else if   (inputCep.length <= 7){
      alert("Atenção faltam digítos no campo CEP. Preencha com 8 dígitos");
      // this.newSearch()
    } 
    else {
         //this.cep = new Cep()// limpar campo
        // this.cep.cep = inputCep;
      alert('Não foi possível realizar a busca.'); 
    } 
      })
  }

  newSearch(){
    this.resultContainer = false;
    this.cep.cep = '';
  }
}
