import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

import { LoginPageComponent } from './login-page/login-page.component';
import { MonsterFormComponent } from './monster-form/monster-form.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { MonstersPageComponent } from './monsters-page/monsters-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'register-page', component: RegisterPageComponent },
  { path: 'monster-form', component: MonsterFormComponent },
  { path: 'my-monsters', component: MonstersPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
