import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { User } from '../model/user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-moji-taskovi',
  templateUrl: './moji-taskovi.component.html',
  styleUrls: ['./moji-taskovi.component.css']
})
export class MojiTaskoviComponent implements OnInit {

  constructor(private userService:UserServiceService) { 
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'))['user'];
    }
  }

  isLogged:Boolean;
  mojiTaskovi:Task[]=[];
  user:User;
  ngOnInit(): void {
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'))['user'];
      this.isLogged=true;
    }
    
    this.userService.mojiTaskovi(this.user.jmbg).subscribe((data:Task[])=>{
      this.mojiTaskovi=data;
      console.log(this.mojiTaskovi);
  });
  }
  delete(id:String){
    this.userService.unassign(id).subscribe((data:Task[])=>{
      this.mojiTaskovi.forEach(elem=>{
        if(elem.korisnik.jmbg==id){
          this.mojiTaskovi.splice(this.mojiTaskovi.indexOf(elem));
        }
      })
    })
  }
 /*
     delete(id1:String){
    this.userService.unassign(id1).subscribe((data:Task[])=>{//ukloni iz slobodnih taskova u bazi
      this.mojiTaskovi.forEach(elem=>{
        if(elem.korisnik.jmbg==id1){
          this.mojiTaskovi.splice(this.mojiTaskovi.indexOf(elem)); // ukloni odmah i iz moje liste
        }
      })
    }
  }
 */ 
} 
