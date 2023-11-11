import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvaliarComponent } from './components/avaliar/avaliar.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FooterComponent } from './components/footer/footer.component';
import { GerenciarComponent } from './components/gerenciar/gerenciar.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { LoginComponent } from './components/login/login.component';
import { MenuInicialComponent } from './components/menu-inicial/menu-inicial.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { TicketComponent } from './components/ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    AvaliarComponent,
    CadastroComponent,
    FooterComponent,
    GerenciarComponent,
    HeaderComponent,
    HeaderUserComponent,
    LoginComponent,
    MenuInicialComponent,
    PerfilComponent,
    ReservaComponent,
    HomeUserComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
