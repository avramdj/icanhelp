import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { User } from '../model/user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-slobodni-taskovi',
  templateUrl: './slobodni-taskovi.component.html',
  styleUrls: ['./slobodni-taskovi.component.css']
})
export class SlobodniTaskoviComponent implements OnInit {

  constructor(private userService:UserServiceService) {
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'))['user'];
    }
   }
  user:User;
  taskovi:Task[]=[];
  ngOnInit(): void {

    this.userService.getTasks().subscribe((data:Task[])=>{

      for(let i=0;i<data.length;++i) {
              data[i].task_creation_date = new Date(data[i].task_creation_date).toUTCString();
      }

      this.taskovi=data;


      console.log(data);
      //svi taskovi izlistani. Treba da se filtriraju samo moji taskovi.
  });
  }

  ukloni(task:Task){
    this.taskovi.splice(this.taskovi.indexOf(task), 1);
  }
  preuzmi(id1:string,id2:string){
      this.userService.dodajVolontera(id1,id2).subscribe((data:Task[])=>{//dodaj u mojeTaskove u bazi
        this.userService.deleteTask(id1).subscribe((data:Task[])=>{//ukloni iz slobodnih taskova u bazi
          this.taskovi.forEach(elem=>{
            if(elem.korisnik.jmbg==id1){
              this.taskovi.splice(this.taskovi.indexOf(elem)); // ukloni odmah i iz moje liste
            }
          })
      })
    })
  }

}
