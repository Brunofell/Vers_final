import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cadastro } from './cadastro.model';
import { MatSnackBar } from '@angular/material/snack-bar';



@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  
  baseUrl: String = 'http://localhost:8080'

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAll():Observable<Cadastro[]>{

    const url = `${this.baseUrl}/cadastros`

    return this.http.get<Cadastro[]>(url)
  }

  findById(id: String): Observable<Cadastro>{
    const url = `${this.baseUrl}/cadastros/${id}`
    return this.http.get<Cadastro>(url)
  }


  create(categoria: Cadastro): Observable<Cadastro>{
    const url = `${this.baseUrl}/cadastros`
    return this.http.post<Cadastro>(url, categoria)
  }


  mensagem(str: String): void{
    this.snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
