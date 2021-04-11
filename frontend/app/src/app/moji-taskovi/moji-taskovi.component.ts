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
      this.user = JSON.parse(localStorage.getItem('user'))
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
    console.log(this.user);
    this.userService.mojiTaskovi(this.user.jmbg).subscribe((data:Task[])=>{
      this.mojiTaskovi=data;
      //console.log(data);
      
  });
  }

}
