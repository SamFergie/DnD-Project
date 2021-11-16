import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, NgControlStatusGroup } from '@angular/forms';
import { LoginandregService } from '../services/loginandreg.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
    loginForm: FormGroup;
    loginSubmitted = false;
    registerSubmitted = false;

    constructor(private fb: FormBuilder, private _loginService: LoginandregService) {
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
            this._loginService.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value).subscribe({
                next: _ => { this.validSignIn(this.loginForm.controls['username'].value); },
                error: _ => { this.loginForm.controls['password'].setErrors( {notCorrect: true}); }
            });
        }
    }

    validSignIn(accountEmail: any){
        console.log("Valid Sign In");
    }

}
