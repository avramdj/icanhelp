import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { VolontirajComponent } from './volontiraj/volontiraj.component';
import { ZahtevajVolontiranjeComponent } from './zahtevaj-volontiranje/zahtevaj-volontiranje.component';
import { SlobodniTaskoviComponent } from './slobodni-taskovi/slobodni-taskovi.component';
import { MojiTaskoviComponent } from './moji-taskovi/moji-taskovi.component';
import { OKorisnikuComponent } from './o-korisniku/o-korisniku.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    VolontirajComponent,
    ZahtevajVolontiranjeComponent,
    SlobodniTaskoviComponent,
    MojiTaskoviComponent,
    OKorisnikuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
