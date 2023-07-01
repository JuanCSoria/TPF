import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { NoencontradaComponent } from './componentes/noencontrada/noencontrada.component';



const routes: Routes = [  
	{path:'iniciar-sesion', component: IniciarSesionComponent},
  {path:'', redirectTo:'iniciar-sesion', pathMatch:'full'},
  {path:'portfolio', component:PortfolioComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'inicio', component: PortfolioComponent},
  {path:'acercade', component: AcercadeComponent},
  {path:'experiencia', component: ExperienciaComponent},
  {path:'educacion', component: EducacionComponent},
  {path:'habilidades', component: HabilidadesComponent},
  {path:'proyectos', component: ProyectosComponent},
  {path:'noencontrada', component: NoencontradaComponent},
  {path:'**', redirectTo: 'noencontrada'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
