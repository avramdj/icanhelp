import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-zahtevaj-volontiranje',
  templateUrl: './zahtevaj-volontiranje.component.html',
  styleUrls: ['./zahtevaj-volontiranje.component.css']
})
export class ZahtevajVolontiranjeComponent implements OnInit {

  constructor(private userService:UserServiceService,private router:Router) { }


  //api/task/new requires { “jmbg” : String, “task_string” : String, “latitude” : Number/String, “longitude” : Number/String }
  jmbg:String;
  task_string:String;
  latitude:String;
  longitude:String;
  user:User;
  ngOnInit(): void {
    this.jmbg="jmbg";
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'))['user'];
      this.jmbg=this.user.jmbg;
    }
  }

  preusmeriNaMenu(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  
  napraviTask(){
 
    this.userService.addTask(this.jmbg, this.task_string, this.latitude, this.longitude).subscribe(ob=>{
      console.log("Dodat task.");
      setTimeout(this.preusmeriNaMenu.bind(this),2000);
    })
  }
}
