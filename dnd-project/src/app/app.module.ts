import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MonsterFormComponent } from './monster-form/monster-form.component';
import { LoginandregService } from './services/loginandreg.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MonsterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LoginandregService],
  bootstrap: [AppComponent]
})
export class AppModule { }
