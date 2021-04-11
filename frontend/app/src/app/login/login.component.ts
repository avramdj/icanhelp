import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router, private userService:UserServiceService) { }

  ngOnInit(): void {
  }

  username:string;
  password:string;
  isLoggedIn:boolean;
  greskaPriLogovanju:Boolean;
  login(){
    this.userService.login(this.username,this.password).subscribe((user:User)=>{
      if(user){
        localStorage.setItem('user',JSON.stringify(user));
        this.preusmeri('../');
        this.isLoggedIn=true;
        this.greskaPriLogovanju=false;
      }
      else {
        //alert("Bad data.");
        this.greskaPriLogovanju=true;
      }
    })
  }
  preusmeri(gde:string){
    this.router.navigate([gde], {relativeTo: this.route});
  }

}
