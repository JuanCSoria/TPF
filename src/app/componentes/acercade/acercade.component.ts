<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
=======
import { Component } from '@angular/core';
>>>>>>> a9918f0d90c33674bf2c48304d3b7feea1201c76

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
<<<<<<< HEAD
export class AcercadeComponent implements OnInit {
  persona: persona = new persona("","","","");

    constructor(public personaService: PersonaService){ }

  ngOnInit() : void{
      this.personaService.getPersona().subscribe(data => {this.persona = data})
  }
=======
export class AcercadeComponent {

>>>>>>> a9918f0d90c33674bf2c48304d3b7feea1201c76
}
