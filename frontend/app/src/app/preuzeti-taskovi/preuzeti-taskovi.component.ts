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
  mojiTaskovi:Task[]=[];
  user:User;
  ngOnInit(): void {
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'))['user'];
    }
    console.log(this.user);
    this.userService.getTasks().subscribe((data:Task[])=>{
      this.taskovi=data;
      this.taskovi.forEach(el=>{
        if(el.korisnik.jmbg==this.user.jmbg){
          this.mojiTaskovi.push(el);
        }
      })
      //console.log(data);
      
  });
  }

}
