import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  uri = 'http://nikolasutic.xyz:4040'

  login(username, password){
    const data = {
      username:username,
      password:password
    }
    console.log("login:");
    console.log(data);
    return this.http.post(`${this.uri}/api/user/login`,data);
  }
  //this.username,this.password,this.name,this.surname,
  //this.number,this.JMBG,this.brlicnekarte
  register(name,last_name,username,password,jmbg,br_licne_karte,phone_number){
    const data = {
      name: name,
      last_name: last_name,
      username:username,
      password: password,
      jmbg:jmbg,
      br_licne_karte:br_licne_karte,
      phone_number:phone_number
    }
    return this.http.post(`${this.uri}/api/user/register`,data);
  }


  ///api/task/assign/:id1/:id2


  unassign(id){
    return this.http.get(`${this.uri}/api/unassign/${id}`);

  }

  nearestTaskList(lat, long){
    ///api/task/listNearestTasks/:lat/:long
    return this.http.get(`${this.uri}/api/task/assign/${lat}/${long}`);
  }

  mojiTaskovi(id){
    ///api/task/listNearestTasks/:lat/:long

    return this.http.get(`${this.uri}/api/user/mytask/${id}`)['tasks'];
  }

  deleteTask(id){
    ///api/task/delete/:id
    return this.http.get(`${this.uri}/api/task/delete/${id}`);
  }

  dodajVolontera(id1,id2) {
    return this.http.get(`${this.uri}/api/task/assign/${id1}/${id2}`);
  }

  addTask(jmbg,task_string,latitude,longitude){
    const data = {
      jmbg:jmbg,
      task_string:task_string,
      latitude:latitude,
      longitude:longitude
    }
    return this.http.post(`${this.uri}/api/task/new`,data);
  }
  getTasks(){
    return this.http.get(`${this.uri}/api/task/listTasks`);

  }
  getFreeTasks(){
    return this.http.get(`${this.uri}/api/task/listFreeTasks`);
  }

  /*
    /api/task/new requires { “jmbg” : String, “task_string” : String, “latitude” : Number/String, “longitude” : Number/String }
  */ 
}


