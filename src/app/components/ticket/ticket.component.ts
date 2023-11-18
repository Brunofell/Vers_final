import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  ticket: Ticket = {
    id: '',
    nome: '',
    cpf: '',
    ticket: ''
  }

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {}

  usuarioId!: string;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.usuarioId = params.get('id')!;
    });
  }

  create(): void {
    this.apiService.createTicket(this.ticket, this.usuarioId).subscribe(
      (resposta) => {
        this.router.navigate([`ticket/${this.usuarioId}`]); // Ajuste aqui
        this.apiService.mensagem('Ticket enviada com sucesso');
      },
      (err) => {
        this.router.navigate([`ticket/${this.usuarioId}`]); // Ajuste aqui
        this.apiService.mensagem('Erro ao criar novo ticket. Tente mais tarde.');
        console.log("aqiui", this.usuarioId)
        console.log(err)
      }
    );
  }
}