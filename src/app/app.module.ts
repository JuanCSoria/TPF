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
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HttpClientModule } from '@angular/common/http';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { NoencontradaComponent } from './componentes/noencontrada/noencontrada.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PerfilComponent } from './enlace/perfil/perfil.component';
import { EnlaceproyectoComponent } from './enlace/enlaceproyecto/enlaceproyecto.component';
import { EnlacehabilidadesComponent } from './enlace/enlacehabilidades/enlacehabilidades.component';
import { EnlaceexperienciaComponent } from './enlace/enlaceexperiencia/enlaceexperiencia.component';
import { EnlaceeducacionComponent } from './enlace/enlaceeducacion/enlaceeducacion.component';
import { IrArribaComponent } from './componentes/ir-arriba/ir-arriba.component';


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
   ProyectosComponent,
   FooterComponent,
   ToolbarComponent,
   PortfolioComponent,
   IniciarSesionComponent,
   ContactoComponent,
   HabilidadesComponent,
   NoencontradaComponent,
   PerfilComponent,
   EnlaceproyectoComponent,
   EnlacehabilidadesComponent,
   EnlaceexperienciaComponent,
   EnlaceeducacionComponent,
   IrArribaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
