import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Observable } from 'rxjs';
import { Reserva } from '../../reserva/reserva.model';
import { Location } from '@angular/common';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit  {


  reservas!: Observable<Reserva[]>; // Use um Observable para a fonte de dados
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
  usuarioId!: string;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router, private location: Location) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.usuarioId = params.get('id')!;
      this.id_cat = this.route.snapshot.paramMap.get("id_cat")!;
      this.reserva.id = this.route.snapshot.paramMap.get("id")!;
      this.findById()
    });
  }

  findById(): void {
    this.apiService.findByIdReserva(this.reserva.id!).subscribe((resposta) => {
      this.reserva = resposta
    })
  }

  update(id: string): void {
    this.apiService.update(this.reserva).subscribe(
      (resposta) => {
        // Navegar para a página anterior
        this.location.back();
        this.apiService.mensagem('Reserva atualizada com sucesso!');
      },
      (err) => {
        // Navegar para a página anterior
        this.location.back();
        this.apiService.mensagem('Falha ao atualizar reserva! Tente mais tarde..');
      }
    );
  }

  delete(): void{
    this.apiService.deleteReserva(this.reserva.id!).subscribe((resposta)=>{
      this.router.navigate([`cadastros/${this.id_cat}/reservas`]);
      this.apiService.mensagem('Reserva deletada com secesso!')
    }, err =>{
      this.router.navigate([`cadastros/${this.id_cat}/reservas`]);
      this.apiService.mensagem('Falha ao deletar reserva ;-;')
    })
  }

  cancelar(): void{
    this.location.back();
    this.apiService.mensagem('Operação cancelada');
  }

}