import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-ir-arriba',
  templateUrl: './ir-arriba.component.html',
  styleUrls: ['./ir-arriba.component.css']
})
export class IrArribaComponent {
  isShow?:boolean;
  topPosToStartShowing = 150;

  @HostListener('window:scroll')
  checkScroll(){
    //window scroll top
    //both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition =
    window.scrollY||
    document.documentElement.scrollTop ||
    document.body.scrollTop||
    0;
    console.log(scrollPosition);

    if(scrollPosition >= this.topPosToStartShowing){
      document.getElementById('inicio')?.classList.remove('oculto')
      document.getElementById('inicio')?.classList.add('visible');
      
    }else{
      document.getElementById('inicio')?.classList.remove('visible');
      document.getElementById('inicio')?.classList.add('oculto');
    }
  }

  //TODO:Cross browsing
  gotoTop(){
    window.scroll({
      top:0,
      behavior:'smooth'
    })
  }
}
