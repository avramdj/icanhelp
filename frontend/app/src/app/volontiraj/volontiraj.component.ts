import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-volontiraj',
  templateUrl: './volontiraj.component.html',
  styleUrls: ['./volontiraj.component.css']
})
export class VolontirajComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }
  user:User;
  ngOnInit(): void {
    this.val=0;
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'))['user'];
    }
  }

  val:Number;
  funkc(x){
    switch(x){
      case 1:document.getElementById("prviid").classList.add("selected");document.getElementById("drugiid").classList.remove("selected");document.getElementById("treciid").classList.remove("selected"); break;
      case 2:document.getElementById("drugiid").classList.add("selected");document.getElementById("prviid").classList.remove("selected");document.getElementById("treciid").classList.remove("selected"); break;
      case 3:document.getElementById("treciid").classList.add("selected");document.getElementById("drugiid").classList.remove("selected");document.getElementById("prviid").classList.remove("selected"); break;
    }
  }

  preusmeri(gde:String){
    this.router.navigate([gde], {relativeTo: this.route});
  }

}
