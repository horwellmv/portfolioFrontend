import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Componentes/home/home.component';
import { EducacionComponent } from './Componentes/educacion/educacion.component';
import { ExperienciaComponent } from './Componentes/experiencia/experiencia.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';
import { SkillsComponent } from './Componentes/skills/skills.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "educacion", component: EducacionComponent},
  {path: "experiencia", component: ExperienciaComponent},
  {path: "proyectos", component: ProyectosComponent},
  {path: "skills", component: SkillsComponent},
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
