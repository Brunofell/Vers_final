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
  displayedColumns: string[] = ['id', 'nome', 'email', 'checkIn', 'checkOut', 'quarto', 'pagamento', 'acoes'];
  usuarioId!: string;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.usuarioId = params.get('id')!;
    });

    this.reservas = this.apiService.findAll(this.usuarioId);
  }


  confirmarDelecao(reservaId: string): void {
    const confirmacao = window.confirm('Deseja realmente deletar esta reserva?');

    if (confirmacao) {
      this.apiService.deleteReserva(reservaId).subscribe(
        () => {
          this.apiService.mensagem('Reserva deletada com sucesso');
          // Recarregar a lista de reservas após a deleção
          this.reservas = this.apiService.findAll(this.usuarioId);
        },
        error => {
          console.error('Erro ao deletar reserva', error);
          this.apiService.mensagem('Erro ao deletar reserva');
        }
      );
    }
  }
}