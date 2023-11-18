import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})


export class HomeUserComponent implements OnInit {
  usuarioId!: string;
  usuario: any = {}; // Inicializando um objeto vazio

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.usuarioId = params.get('id')!;
      // Agora você pode usar this.usuarioId conforme necessário
      // Exemplo de atribuição ao objeto this.usuario
      this.usuario.id = this.usuarioId;
    });
  }
}