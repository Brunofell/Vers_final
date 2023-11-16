// api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/cadastros';
  private usuarioIdKey = 'usuarioId';

  constructor(private http: HttpClient, private snack: MatSnackBar) {}

  fazerLogin(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, usuario)
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
}