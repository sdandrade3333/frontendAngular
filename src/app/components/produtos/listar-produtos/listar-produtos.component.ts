import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {
  listaStrings: string[] = ['Primeiro', 'Segundo', 'terceiro'];
  listaNumeros: number[] = [15, 15.18, 100];
  objetoModelo = {
    nome: 'Sidnei',
    idade: 40,
    altura: 1.70,
    graduado: true
  };
  listaProdutos: any[] = [
    { nome: 'Hospedagem Single', preco: 7.69, validade: '2021-05-27', id: 1 },
    { nome: 'Hospedagem Single Ano', preco: 70.56, validade: '2021-06-26', id: 2 },
    { nome: 'Hospedagem Premium ', preco: 11.39, validade: '2021-06-31', id: 3, promocao: true },
    { nome: 'Hospedagem Premium  Ano', preco: 110.06, validade: '2021-07-31', id: 4 },
    { nome: 'Hospedagem Business', preco: 19.19, validade: '2021-12-22', id: 5 },
    { nome: 'Hospedagem Business Ano', preco: 130.05, validade: '2021-12-22', id: 6,promocao: true  }
  ];
  constructor() {
    for (let item of this.listaStrings) {
      console.log(item);
    }
    for (const item of this.listaNumeros) {
      console.log(item);
    }
    console.log(this.objetoModelo);
  }
  ngOnInit(): void {
  }
}
