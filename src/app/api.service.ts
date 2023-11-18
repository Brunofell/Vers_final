import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Cadastro } from './components/cadastro/cadastro.model';
import { Reserva } from './components/reserva/reserva.model';
import { Avaliar } from './components/avaliar/avaliar.model';
import { Ticket } from './components/ticket/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080';
  private usuarioIdKey = 'usuarioId';

  constructor(private http: HttpClient, private snack: MatSnackBar) {}

  fazerLogin(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/cadastros/login`, usuario)
      .pipe(
        catchError(error => {
          console.error('Erro no login', error);
          return throwError(error);
        }),
        tap((res: any) => {
          if (res && res.id) {
            localStorage.setItem(this.usuarioIdKey, res.id);
          }
        })
      );
  }


  mensagem(str: string): void {
    this.snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    });
  }

  getUserProfile(usuarioId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/cadastros/${usuarioId}`)
      .pipe(
        catchError(error => {
          console.error('Erro ao obter perfil', error);
          return throwError(error);
        })
      );
  }

  updateUserProfile(usuarioId: string, cadastro: Cadastro): Observable<any> {
    return this.http.put(`${this.apiUrl}/cadastros/${usuarioId}`, cadastro)
      .pipe(
        catchError(error => {
          console.error('Erro ao atualizar perfil', error);
          return throwError(error);
        })
      );
  }

  deleteUserAccount(usuarioId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/cadastros/${usuarioId}`)
      .pipe(
        catchError(error => {
          console.error('Erro ao deletar conta', error);
          return throwError(error);
        })
      );
  }

  delete(usuarioId: string ):Observable<void>{
    const url = `${this.apiUrl}/cadastros/${usuarioId}`
    return this.http.delete<void>(url)
  }

  createReserva(reserva: Reserva, usuarioId: string): Observable<Reserva> {
    const url = `${this.apiUrl}/reservas?cadastro=${usuarioId}`;  /* AQUIIIIIIIIIIII */
    return this.http.post<Reserva>(url, reserva);
  }

  createAvaliar(avaliar: Avaliar, usuarioId: string): Observable<Avaliar> {
    const url = `${this.apiUrl}/avaliar?cadastro=${usuarioId}`;  /* AQUIIIIIIIIIIII */
    return this.http.post<Avaliar>(url, avaliar);
  }

  createTicket(ticket: Ticket, usuarioId: string): Observable<Ticket> {
    const url = `${this.apiUrl}/ticket?cadastro=${usuarioId}`;  /* AQUIIIIIIIIIIII */
    return this.http.post<Ticket>(url, ticket);
  }
}