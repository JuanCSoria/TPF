import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

import { PerfilComponent } from './enlace/perfil/perfil.component';
import { EnlaceexperienciaComponent } from './enlace/enlaceexperiencia/enlaceexperiencia.component';
import { EnlaceeducacionComponent } from './enlace/enlaceeducacion/enlaceeducacion.component';
import { EnlacehabilidadesComponent } from './enlace/enlacehabilidades/enlacehabilidades.component';
import { EnlaceproyectoComponent } from './enlace/enlaceproyecto/enlaceproyecto.component';
import { NoencontradaComponent } from './componentes/noencontrada/noencontrada.component';

const routes: Routes = [  
	{path:'iniciar-sesion', component: IniciarSesionComponent},
  {path:'', redirectTo:'iniciar-sesion', pathMatch:'full'},
  {path:'portfolio', component:PortfolioComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'perfil', component: PerfilComponent},
  {path:'enlaceexperiencia', component: EnlaceexperienciaComponent},
  {path:'enlaceeducacion', component: EnlaceeducacionComponent},
  {path:'enlacehabilidades', component: EnlacehabilidadesComponent},
  {path:'enlaceproyectos', component: EnlaceproyectoComponent},
  {path:'noencontrada', component: NoencontradaComponent},
  {path:'**', redirectTo: 'noencontrada'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
