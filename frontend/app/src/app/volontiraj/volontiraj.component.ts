import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-volontiraj',
  templateUrl: './volontiraj.component.html',
  styleUrls: ['./volontiraj.component.css']
})
export class VolontirajComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }


  preusmeri(gde:String){
    this.router.navigate([gde], {relativeTo: this.route});
  }

}
