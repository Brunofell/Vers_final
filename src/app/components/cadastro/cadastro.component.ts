import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CadastroService } from './cadastro.service';
import { Cadastro } from './cadastro.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  cadastro: Cadastro = {
    nome: '',
    email: '',
    senha: '',
    cpf: '',
    numero: '',
  }

  constructor(private service: CadastroService, private router: Router){}

  ngOnInit(): void {
    
  }

  create(): void {
    this.service.create(this.cadastro).subscribe((resposta) => {
      this.router.navigate(['login']),
      this.service.mensagem('Conta criada com sucesso!')
    },  err =>{
      for(let i  = 0; i < err.error.errors.length; i++){
        this.service.mensagem(err.error.errors[i].message)
      }
      this.service.mensagem('Erro ao criar conta!')
    })
  }

  cancel(): void{
    this.router.navigate(['menu'])
    this.service.mensagem('Operação cancelada.')
  }

}
