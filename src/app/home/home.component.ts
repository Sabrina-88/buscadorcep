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
    this.resultContainer = true
    this.cepService.buscar(this.cep.cep)
      .then((cep:Cep) => this.cep = cep)
      
      .catch(() => {
        this.resultContainer = false;
        let inputCep = this.cep.cep;
        
        this.cep = new Cep()// limpar campo
        this.cep.cep = inputCep;
        alert('Não foi possivel realizar a busca.');
      })
  }
}
