import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservaComponent } from './components/reserva/reserva.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { MenuInicialComponent } from './components/menu-inicial/menu-inicial.component';
import { AvaliarComponent } from './components/avaliar/avaliar.component';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { GerenciarComponent } from './components/gerenciar/gerenciar.component';
import { TicketComponent } from './components/ticket/ticket.component';


const routes: Routes = [
  {path: 'reserva', component: ReservaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'menu', component: MenuInicialComponent},
  {path: 'avaliar', component: AvaliarComponent},
  { path: 'homeUser/:id', component: HomeUserComponent }, //*** */
  {path: 'perfil', component: PerfilComponent},
  {path: 'gerenciar', component: GerenciarComponent},
  {path: 'ticket', component: TicketComponent},

  // aqui redirecionando quando abrir a aplicação
  { path: '', redirectTo: '/menu', pathMatch: 'full' }, // Redireciona para a rota '/menu'
  { path: 'menu', component: MenuInicialComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
