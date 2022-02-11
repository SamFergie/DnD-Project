import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, NgControlStatusGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginandregService } from '../services/loginandreg.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
    loginForm: FormGroup;
    loginSubmitted = false;
    registerSubmitted = false;

    constructor(private fb: FormBuilder, private _loginService: LoginandregService, private _cookieService: CookieService, private router: Router) {
        this.loginForm = this.fb.group({
            username: ['', Validators.compose([Validators.required])],
            password: ['', Validators.compose([Validators.required])]
        });
    }

    ngOnInit(): void {
    }

    onSubmit(){
        this.loginSubmitted = true;
        if(this.loginForm.valid){
            console.log("Logging In")
            try{
                this._loginService.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value).subscribe({
                    next: _ => { this.validSignIn(this.loginForm.controls['username'].value); },
                    error: _ => { this.loginForm.controls['password'].setErrors( {notCorrect: true}); }
                });
            }catch(error){
                console.log(error);
            }
        }
    }

    validSignIn(username: any){
        // Set cookies
        this._cookieService.set('signed-in', "true");
        this._cookieService.set('username', username);
        // Move to the monster registration page
        this.router.navigate(["monster-form"]);
    }

    invalidSignIn(accountUsername: any){
        console.log("Invalid Sign In");
        console.log(accountUsername);
    }

}
