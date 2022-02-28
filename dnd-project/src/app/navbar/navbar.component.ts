import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  
  constructor(private _cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
      // Remove cookies
      this._cookieService.deleteAll();
      // Move to the home page
      this.router.navigate(["/"]);
  }

}
