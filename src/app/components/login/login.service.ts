import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient, private snack: MatSnackBar) {}

  login(email: string, senha: string): Observable<any> {
    const credentials = { email, senha };
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  mensagem(str: string): void {
    this.snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    });
  }

}
