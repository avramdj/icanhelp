import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { MojiTaskoviComponent } from './moji-taskovi/moji-taskovi.component';
import { OKorisnikuComponent } from './o-korisniku/o-korisniku.component';
import { PreuzetiTaskoviComponent } from './preuzeti-taskovi/preuzeti-taskovi.component';
import { RegisterComponent } from './register/register.component';
import { SlobodniTaskoviComponent } from './slobodni-taskovi/slobodni-taskovi.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { VolontirajComponent } from './volontiraj/volontiraj.component';
import { ZahtevajVolontiranjeComponent } from './zahtevaj-volontiranje/zahtevaj-volontiranje.component';

const routes: Routes = [
  {path:'',component:MenuComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'volontiraj',component:VolontirajComponent,children:[
    {path:'moji-taskovi',component:MojiTaskoviComponent},
    {path:'slobodni-taskovi',component:SlobodniTaskoviComponent},
    {path:'preuzeti-taskovi',component:PreuzetiTaskoviComponent}
  ]},
  {path:'oKorisniku',component:OKorisnikuComponent},
  {path:'zahtevaj-volontiranje',component:ZahtevajVolontiranjeComponent},
  {path:'moji-taskovi',component:MojiTaskoviComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 
}
