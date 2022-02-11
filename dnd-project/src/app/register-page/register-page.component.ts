import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private _loginService: LoginandregService) {
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
              this._loginService.login(this.registerForm.controls['username'].value, this.registerForm.controls['password'].value).subscribe({
                  next: _ => { this.validSignIn(this.registerForm.controls['username'].value); },
                  error: _ => { this.registerForm.controls['password'].setErrors( {notCorrect: true}); }
              });
          }catch(error){
              console.log(error);
          }
      }
  }

  validSignIn(accountUsername: any){
      console.log("Valid Sign In");
      console.log(accountUsername);
  }

  invalidSignIn(accountUsername: any){
      console.log("Invalid Sign In");
      console.log(accountUsername);
  }
}
