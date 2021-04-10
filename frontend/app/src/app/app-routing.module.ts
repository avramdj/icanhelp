import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { MojiTaskoviComponent } from './moji-taskovi/moji-taskovi.component';
import { RegisterComponent } from './register/register.component';
import { SlobodniTaskoviComponent } from './slobodni-taskovi/slobodni-taskovi.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { VolontirajComponent } from './volontiraj/volontiraj.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'menu',component:MenuComponent},
  {path:'volontiraj',component:VolontirajComponent,children:[
    {path:'moji-taskovi',component:MojiTaskoviComponent},
    {path:'slobodni-taskovi',component:SlobodniTaskoviComponent}
  ]}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 
}
