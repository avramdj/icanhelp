import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-slobodni-taskovi',
  templateUrl: './slobodni-taskovi.component.html',
  styleUrls: ['./slobodni-taskovi.component.css']
})
export class SlobodniTaskoviComponent implements OnInit {

  constructor(private userService:UserServiceService) { }

  taskovi:Task[]=[];
  ngOnInit(): void {

    this.userService.getTasks().subscribe((data:Task[])=>{
      this.taskovi=data;
      console.log(data);
      //svi taskovi izlistani. Treba da se filtriraju samo moji taskovi.
  });
  }

  preuzmi(id1:string,id2:string){
      this.userService.dodajVolontera(id1,id2).subscribe((data:Task[])=>{
        this.userService.deleteTask(id1).subscribe((data:Task[])=>{
      })
    })
  }

}
