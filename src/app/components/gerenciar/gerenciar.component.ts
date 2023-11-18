import { Component } from '@angular/core';
import { Cadastro } from '../cadastro/cadastro.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-gerenciar',
  templateUrl: './gerenciar.component.html',
  styleUrls: ['./gerenciar.component.css']
})
export class GerenciarComponent {
  cadastro: Cadastro = {
    id: '',
    nome: '',
    email: '',
    senha: '',
    cpf: '',
    numero: ''
  }

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {}

  usuarioId!: string;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.usuarioId = params.get('id')!;
    });
  }

}
