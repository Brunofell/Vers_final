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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ApiService } from './api.service';
import { DeleteComponent } from './components/gerenciar/delete/delete.component';
import { UpdateComponent } from './components/gerenciar/update/update.component';

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
    TicketComponent,
    DeleteComponent,
    UpdateComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule, 
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
