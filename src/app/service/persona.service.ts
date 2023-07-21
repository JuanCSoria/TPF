import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  URL = 'https://backendtpf.onrender.com/';

  constructor(private http: HttpClient) {} 

   public cargarPerfil(): Observable<persona> {
      return this.http.get<persona>(this.URL + 'persona/listar/perfil');
   }
}
