import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}


