import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { APlogoComponent } from './componentes/aplogo/aplogo.component';
import { BotoneraComponent } from './componentes/botonera/botonera.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { NgCircleProgressModule} from 'ng-circle-progress';
import { FooterComponent } from './componentes/footer/footer.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
<<<<<<< HEAD
import {HttpClientModule } from '@angular/common/http';
=======

>>>>>>> a9918f0d90c33674bf2c48304d3b7feea1201c76


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    APlogoComponent,
   BotoneraComponent,
   BannerComponent,
   AcercadeComponent,
   ExperienciaComponent,
   EducacionComponent,
   HabilidadesComponent,
   ProyectosComponent,
   FooterComponent,
   ToolbarComponent,
   PortfolioComponent,
   IniciarSesionComponent,
   ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
=======
    NgCircleProgressModule.forRoot({})
>>>>>>> a9918f0d90c33674bf2c48304d3b7feea1201c76
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
