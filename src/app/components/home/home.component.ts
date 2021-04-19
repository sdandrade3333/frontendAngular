import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nomeProduto: string = 'Hospedagem Sites de Serviços';
  anuncio: string = ` ${this.nomeProduto} está em promoção`;
  idProduto: string  = 'Sites Premium';
  precoProduto: number = 11.39;
  promocao: boolean = true;
  foto: string ='assets/img/capa.png';
  foto1: string ='assets/img/onze.png';
  dataValidade ='2021-12-31';
  constructor() { 

    // this.anuncio = `O ` + this.nomeProduto +`esta em promoção`; 
    console.log('Nome do produto ',this.nomeProduto);
    console.log('Anuncio ',this.anuncio);
    console.log('id ',this.idProduto);
    console.log('Preço ',this.precoProduto);
    console.log('Promoção',this.promocao);

  }

  ngOnInit(): void {
  }

}
