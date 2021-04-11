import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  preusmeri(gde:string){
    this.router.navigate([gde], {relativeTo: this.route});
  }
  preusmerivol(){
    if(localStorage.getItem('user')){
      this.preusmeri('../volontiraj');
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
