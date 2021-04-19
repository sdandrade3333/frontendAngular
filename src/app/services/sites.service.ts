import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduto } from '../model/IProduto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

   private URL: string = 'http://localhost:3000/produtos';
   
  constructor(private http: HttpClient) { }

  buscaTodos():Observable<IProduto[]> {
    return this.http.get<IProduto[]>(this.URL);

}

}
