import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MonsterFormComponent } from './monster-form/monster-form.component';
import { LoginandregService } from './services/loginandreg.service';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewMonstersComponent } from './view-monsters/view-monsters.component';
import { MonstersPageComponent } from './monsters-page/monsters-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MonsterFormComponent,
    RegisterPageComponent,
    HomePageComponent,
    NavbarComponent,
    ViewMonstersComponent,
    MonstersPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LoginandregService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
