import { Component } from '@angular/core';
import { Cadastro } from '../cadastro/cadastro.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Avaliar } from './avaliar.model';

@Component({
  selector: 'app-avaliar',
  templateUrl: './avaliar.component.html',
  styleUrls: ['./avaliar.component.css']
})
export class AvaliarComponent {
  avaliar: Avaliar = {
    id: '',
    nome: '',
    email: '',
    numero: '',
    nota: '',
  }

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {}

  usuarioId!: string;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.usuarioId = params.get('id')!;
    });
  }

  create(): void {
    this.apiService.createAvaliar(this.avaliar, this.usuarioId).subscribe(
      (resposta) => {
        this.router.navigate([`avaliar/${this.usuarioId}`]); // Ajuste aqui
        this.apiService.mensagem('Avaliação enviada com sucesso');
      },
      (err) => {
        this.router.navigate([`avaliar/${this.usuarioId}`]); // Ajuste aqui
        this.apiService.mensagem('Erro ao criar nova avaliação. Tente mais tarde.');
        console.log("aqiui", this.usuarioId)
        console.log(err)
      }
    );
  }
}