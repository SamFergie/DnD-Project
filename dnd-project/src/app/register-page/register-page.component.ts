import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginandregService } from '../services/loginandreg.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  registerForm: FormGroup;
  loginSubmitted = false;
  registerSubmitted = false;

  constructor(private fb: FormBuilder, private _loginService: LoginandregService, private _cookieService: CookieService, private router: Router) {
      this.registerForm = this.fb.group({
          username: ['', Validators.compose([Validators.required])],
          password: ['', Validators.compose([Validators.required])],
          confirmPassword: ['', Validators.compose([Validators.required])]
      });
  }

  ngOnInit(): void {
  }

  onSubmit(){
      this.loginSubmitted = true;
      if(this.registerForm.valid){
          console.log("Logging In")
          try{
              this._loginService.register(this.registerForm.controls['username'].value, this.registerForm.controls['password'].value).subscribe({
                  next: _ => { this.validSignIn(this.registerForm.controls['username'].value); },
                  error: _ => { this.registerForm.controls['password'].setErrors( {notCorrect: true}); }
              });
          }catch(error){
              console.log(error);
          }
      }else{
          console.log("Error");
      }
  }

  validSignIn(accountUsername: any){
        // Set cookies
        this._cookieService.set('signed-in', "true");
        this._cookieService.set('username', accountUsername);
        // Move to the monster registration page
        this.router.navigate(["monster-form"]);
  }

  invalidSignIn(accountUsername: any){
      console.log("Invalid Sign In");
      console.log(accountUsername);
  }
}
