import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Servicios

//Componentes
import { NavbarComponent } from './Componentes/Compartidos/navbar/navbar.component';
import { HomeComponent } from './Componentes/home/home.component';
import { EducacionComponent } from './Componentes/educacion/educacion.component';
import { ExperienciaComponent } from './Componentes/experiencia/experiencia.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';
import { SkillsComponent } from './Componentes/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LoginComponent } from './Componentes/Compartidos/login/login.component';
import { NavbarLogeadoComponent } from './Componentes/Logeado/navbar-logeado/navbar-logeado.component';
import { HomeLogeadoComponent } from './Componentes/Logeado/home-logeado/home-logeado.component';
import { EducacionLogeadoComponent } from './Componentes/Logeado/educacion-logeado/educacion-logeado.component';
import { ExperienciaLogeadoComponent } from './Componentes/Logeado/experiencia-logeado/experiencia-logeado.component';
import { SkillsLogeadoComponent } from './Componentes/Logeado/skills-logeado/skills-logeado.component';
import { ProyectosLogeadoComponent } from './Componentes/Logeado/proyectos-logeado/proyectos-logeado.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EducacionComponent,
    ExperienciaComponent,
    ProyectosComponent,
    SkillsComponent,
    LoginComponent,
    NavbarLogeadoComponent,
    HomeLogeadoComponent,
    EducacionLogeadoComponent,
    ExperienciaLogeadoComponent,
    SkillsLogeadoComponent,
    ProyectosLogeadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
