import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent},
	{path:'iniciar-sesion', component: IniciarSesionComponent},
  {path:'',redirectTo:'iniciar-sesion', pathMatch:'full'},
  {path:'contacto', component:ContactoComponent}
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
