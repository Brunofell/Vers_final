import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  usuario = { email: '', senha: '' };
  mensagemErro = '';

  constructor(private apiService: ApiService, private snack: MatSnackBar, private router: Router) {}

  ngOnInit(): void {
  }

  fazerLogin() {
    if (!this.usuario.email || !this.usuario.senha) {
      this.mensagemErro = 'Por favor, preencha todos os campos.';
      return;
    }
  
    this.apiService.fazerLogin(this.usuario).subscribe(
      (res) => {
        console.log('Resposta da API:', res);
        if (res && res.email) {
          console.log('Login bem-sucedido');
          this.router.navigate(['homeUser', res.id]); // Passa o ID do usuário na navegação
          this.apiService.mensagem('Login bem-sucedido');
        } else {
            this.router.navigate(['login']),
            this.apiService.mensagem('Erro ao fazer Login.')
            console.log('Erro ao fazer Login.');
        }
      },
      (error) => {
        this.router.navigate(['login']),
        this.apiService.mensagem('Erro ao realizar login. Por favor, tente novamente.'),
        console.log('Erro no login', error);
        console.error('Erro no login', error);
      }
    );
  }
}
