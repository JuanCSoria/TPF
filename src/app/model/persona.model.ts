export class persona {
    id?:number;
    nombre:string;
    titulo:string;
    acercaDe:string;
    imgPerfil:string;

    constructor(nombre:string, titulo:string, acercaDe:string, imgPerfil:string){
        this.nombre = nombre;
        this.titulo = titulo;
        this.acercaDe = acercaDe;
        this.imgPerfil = imgPerfil;
    }
}