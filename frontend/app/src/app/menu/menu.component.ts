import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';

function menu() {
  document.getElementById("burger").classList.toggle("change");
  document.getElementById("linksHolder").classList.toggle("changeHolder"); 
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  

  constructor(private router:Router,private route:ActivatedRoute) { }
  isLogged:Boolean;
  ngOnInit(): void {
    if(localStorage.getItem('user')){
      this.isLogged=true;
    }
  }

  menuc(){
    menu();
  }
  menut(){
    setTimeout(this.menuc,300);
  }





  preusmeri(gde:string){
    this.router.navigate([gde], {relativeTo: this.route});
  }
  preusmerivol(){
    if(localStorage.getItem('user')){
      this.preusmeri('../volontiraj/slobodni-taskovi');
    }
    else {
      this.preusmeri('../login');
    }
  }
  preusmerizahtev(){
    if(localStorage.getItem('user')){
      this.preusmeri('../zahtevaj-volontiranje');
    }
    else {
      this.preusmeri('../login');
    }
  }
}
