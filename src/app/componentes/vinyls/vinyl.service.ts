import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Vinyl } from './vinyl';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VinylService {


  private readonly API =  'http://localhost:3000/vinyls'

  constructor( private http: HttpClient) { }



  listar(pagina: number, filtro: string): Observable<Vinyl[]>{


    const vinilPorPagina: number = 8;

    let params = new HttpParams()
        .set("_page", pagina)
        .set("_limit",vinilPorPagina)

    if(filtro.trim().length > 2){
      params = params.set("q", filtro)
    }

    return this.http
      .get<Vinyl[]>(this.API, {params})
  }

  criar(vinyl: Vinyl): Observable<Vinyl>{
    return this.http.post<Vinyl>(this.API, vinyl)
  }


  editar(vinyl: Vinyl): Observable<Vinyl>{
    const url = `${this.API}/${vinyl.id}`
    return this.http.put<Vinyl>(url, vinyl)
  }

  excluir(id: number): Observable<Vinyl>{
    const url = `${this.API}/${id}`

    return this.http.delete<Vinyl>(url)
  }

  buscarPorId(id: number): Observable<Vinyl>{
     const url = `${this.API}/${id}`

     return this.http.get<Vinyl>(url)
  }

}
