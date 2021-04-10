import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private servis:UserServiceService,private router:Router,private route:ActivatedRoute) { }


  username:string;
  password:string;
  name:string;
  surname:string;
  number:string;
  JMBG:string;
  brlicnekarte:string;
  //name,last_name,username,password,jmbg,br_licne_karte,phone_number
  uspesnoRegistrovan:Boolean;
  greskaPriRegistraciji:Boolean;
  ngOnInit(): void {
    this.servis.register(this.name,this.surname,this.username,this.password,
      this.JMBG,this.brlicnekarte,this.number).subscribe(ob=>{
        if(ob['user']=='ok'){
          this.uspesnoRegistrovan = true;
          this.greskaPriRegistraciji=false;
          setTimeout(this.preusmeriNaLogin.bind(this),2000);
          //this.preusmeriNaLogin();
        }

      })
    }


    preusmeriNaLogin(){
      this.router.navigate(['../login'], {relativeTo: this.route});
    }
}
