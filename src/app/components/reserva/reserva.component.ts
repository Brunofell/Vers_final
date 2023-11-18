import { Component } from '@angular/core';
import { Cadastro } from '../cadastro/cadastro.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Reserva } from './reserva.model';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {
  id_cat: String = '';

  reserva: Reserva = {
    id: '',
    nome: '',
    email: '',
    numero: '',
    checkIn: '',
    checkOut: '',
    quarto: '',
    pagamento: '',
  }


  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {}

  usuarioId!: string;

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!
    this.route.paramMap.subscribe(params => {
      this.usuarioId = params.get('id')!;
    });
  }

  create(): void {
    this.apiService.createReserva(this.reserva, this.usuarioId).subscribe(
      (resposta) => {
        this.router.navigate([`reserva/${this.usuarioId}`]); // Ajuste aqui
        this.apiService.mensagem('Reserva criada com sucesso');
      },
      (err) => {
        this.router.navigate([`reserva/${this.usuarioId}`]); // Ajuste aqui
        this.apiService.mensagem('Erro ao criar nova reserva. Tente mais tarde.');
        console.log("aqiui", this.usuarioId)
        console.log(err)
      }
    );
  }
}
