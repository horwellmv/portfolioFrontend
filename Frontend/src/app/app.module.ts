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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EducacionComponent,
    ExperienciaComponent,
    ProyectosComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
