import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Componentes/home/home.component';
import { EducacionComponent } from './Componentes/educacion/educacion.component';
import { ExperienciaComponent } from './Componentes/experiencia/experiencia.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';
import { SkillsComponent } from './Componentes/skills/skills.component';
import { LoginComponent } from "./Componentes/Compartidos/login/login.component";
import { HomeLogeadoComponent } from './Componentes/Logeado/home-logeado/home-logeado.component';
import { EducacionLogeadoComponent } from './Componentes/Logeado/educacion-logeado/educacion-logeado.component';
import { ExperienciaLogeadoComponent } from './Componentes/Logeado/experiencia-logeado/experiencia-logeado.component';
import { SkillsLogeadoComponent } from './Componentes/Logeado/skills-logeado/skills-logeado.component';
import { ProyectosLogeadoComponent } from './Componentes/Logeado/proyectos-logeado/proyectos-logeado.component';
import { NavbarLogeadoComponent } from './Componentes/Logeado/navbar-logeado/navbar-logeado.component';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "educacion", component: EducacionComponent},
  {path: "experiencia", component: ExperienciaComponent},
  {path: "proyectos", component: ProyectosComponent},
  {path: "skills", component: SkillsComponent},
  {path: "login", component: LoginComponent},

  { path: 'navbarlog', component: NavbarLogeadoComponent },
  { path: 'homelog', component: HomeLogeadoComponent },
  { path: 'educacionlog', component: EducacionLogeadoComponent },
  { path: 'experiencialog', component: ExperienciaLogeadoComponent },
  { path: 'proyectoslog', component: ProyectosLogeadoComponent },
  { path: 'skillslog', component: SkillsLogeadoComponent },

  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
