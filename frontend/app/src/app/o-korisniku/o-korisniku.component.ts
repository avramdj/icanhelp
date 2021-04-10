import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-o-korisniku',
  templateUrl: './o-korisniku.component.html',
  styleUrls: ['./o-korisniku.component.css']
})
export class OKorisnikuComponent implements OnInit {
  constructor() {

  }

  user:User;
  ngOnInit(): void {
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'))['user'];
    }
}

}
