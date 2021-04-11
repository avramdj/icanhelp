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

    var geolat = 0;
    var geolong = 0;
    var options = {
      enableHighAccuracy: true,
      timeout: 2500,
      maximumAge: 0
    };
    
    function success(pos) {
      var crd = pos.coords;
        geolat = crd.latitude;
        geolong = crd.longitude; 
    }
    
    function error(err) {
      console.log("Greska");
    }
    
    function get_geloocation() {
            navigator.geolocation.getCurrentPosition(success, error, options);
            return {
                    latitude: geolat,
                    longitude: geolong
            }
    }
    
    let locObj = get_geloocation();
    
    geolat = locObj.latitude;
    geolong = locObj.longitude;

    console.log(geolat)
    console.log(geolong)

    function distance(a) {
      let deglen = 110.25
      let x = a.latitude - geolat
      let y = (a.longitude - geolong)*Math.cos(geolat)
      return deglen*Math.sqrt(x*x + y*y)

      return Math.sqrt((a.longitude-geolong)**2 + (a.latitude-geolat)**2);
    } 

    this.userService.getFreeTasks(geolat, geolong).subscribe((data:Task[])=>{

      for(let i=0;i<data.length;++i) {
              data[i].creation_date_string = data[i].task_creation_date.toString();
      }
      this.taskovi=data;
      for(let i = 0; i < this.taskovi.length; i++){
              this.taskovi[i].udaljenost = distance(this.taskovi[i])
      }


      console.log(this.taskovi);
      //svi taskovi izlistani. Treba da se filtriraju samo moji taskovi.
  });
  }

  ukloni(task:Task){
    this.taskovi.splice(this.taskovi.indexOf(task), 1);
  }
  preuzmi(id1:string,id2:string,task:Task){
      this.userService.dodajVolontera(id1,id2).subscribe((data:Task[])=>{//dodaj u mojeTaskove u bazi
        this.ukloni(task);
    })
  }

}
