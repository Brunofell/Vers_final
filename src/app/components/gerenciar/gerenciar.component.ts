import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Reserva } from '../reserva/reserva.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gerenciar',
  templateUrl: './gerenciar.component.html',
  styleUrls: ['./gerenciar.component.css']
})
export class GerenciarComponent implements OnInit {

  reservas!: Observable<Reserva[]>; // Use um Observable para a fonte de dados
  displayedColumns: string[] = ['id', 'nome', 'email', 'checkIn', 'checkOut', 'quarto', 'pagamento'];
  usuarioId!: string;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.usuarioId = params.get('id')!;
    });

    this.reservas = this.apiService.findAll(this.usuarioId);
  }


}