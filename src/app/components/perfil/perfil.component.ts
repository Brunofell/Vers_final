// perfil.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuarioId!: string;
  dadosPerfil: any; // Altere o tipo conforme necessário

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {

  }
}