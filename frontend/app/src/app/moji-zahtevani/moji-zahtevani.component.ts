import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { User } from '../model/user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-moji-zahtevani',
  templateUrl: './moji-zahtevani.component.html',
  styleUrls: ['./moji-zahtevani.component.css']
})
export class MojiZahtevaniComponent implements OnInit {

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
