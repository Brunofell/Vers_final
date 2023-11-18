import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Cadastro } from '../cadastro/cadastro.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

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
      this.loadUserProfile();
    });
  }

  loadUserProfile() {
    // Chame o serviço para obter os dados do usuário com base no ID
    this.apiService.getUserProfile(this.usuarioId).subscribe(
      (data: any) => {
        this.cadastro = data;
      },
      error => {
        console.error('Erro ao carregar perfil', error);
      }
    );
  }

  updateProfile() {
    // Chame o serviço para atualizar o perfil do usuário
    this.apiService.updateUserProfile(this.usuarioId, this.cadastro).subscribe(
      () => {
        this.apiService.mensagem('Perfil atualizado com sucesso');
        // Você pode redirecionar o usuário para a página desejada após a atualização
        // this.router.navigate(['/perfil', this.usuarioId]);
      },
      error => {
        console.error('Erro ao atualizar perfil', error);
      }
    );
  }



  delete(): void {
    this.apiService.delete(this.usuarioId!).subscribe((resposta)=>{
      this.router.navigate(['menu'])
      this.apiService.mensagem('Usuario deletada com sucesso!')
    }, err => {
      this.apiService.mensagem(err.error.error)
    })

  }
}
