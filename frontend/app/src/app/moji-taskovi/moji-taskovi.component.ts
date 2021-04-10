import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-moji-taskovi',
  templateUrl: './moji-taskovi.component.html',
  styleUrls: ['./moji-taskovi.component.css']
})
export class MojiTaskoviComponent implements OnInit {

  constructor(private userService:UserServiceService) { }

  mojiTaskovi:Task[]=[];
  ngOnInit(): void {

    this.userService.getFreeTasks().subscribe((data:Task[])=>{
      this.mojiTaskovi=data;
      //svi taskovi izlistani. Treba da se filtriraju samo moji taskovi.
  });
  }

}
