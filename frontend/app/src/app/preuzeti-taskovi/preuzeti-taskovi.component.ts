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

  delete(id:String){
    this.userService.unassign(id).subscribe((data:Task[])=>{
      this.taskovi.forEach(elem=>{
        if(elem.korisnik.jmbg==id){
          this.taskovi.splice(this.taskovi.indexOf(elem));
        }
      })
    })
  }

}
