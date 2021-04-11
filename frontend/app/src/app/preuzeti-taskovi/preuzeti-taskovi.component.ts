import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { User } from '../model/user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-preuzeti-taskovi',
  templateUrl: './preuzeti-taskovi.component.html',
  styleUrls: ['./preuzeti-taskovi.component.css']
})
export class PreuzetiTaskoviComponent implements OnInit {

  constructor(private userService:UserServiceService) { }

  taskovi:Task[]=[];
  user:User;
  ngOnInit(): void {
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'))['user'];
    }
    console.log(this.user);
    this.userService.mojiTaskovi(this.user.jmbg).subscribe((data)=>{
    this.taskovi = data['tasks'];
  });
  }

  ukloni(task:Task){
    this.taskovi.splice(this.taskovi.indexOf(task), 1);
    console.log("task:");
    console.log(task);
  }

  delete(id:String,task:Task){
    this.userService.unassign(id).subscribe((data:Task[])=>{
      
    })
    this.ukloni(task);
  }

}
