import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginandregService } from '../services/loginandreg.service';

@Component({
    selector: 'app-monsters-page',
    templateUrl: './monsters-page.component.html',
    styleUrls: ['./monsters-page.component.css']
})
export class MonstersPageComponent implements OnInit {

    public monsters: any;
    public monsterSelected: any;
    public currentMonster: any;
    constructor(private _loginService: LoginandregService, private _cookieService: CookieService) {
        this.monsterSelected = false;
    }

    ngOnInit(): void {
        if(this._cookieService.get('signed-in') == "true"){
            try{
                this._loginService.getMonsterOfUser(this._cookieService.get('username')).subscribe({
                    next: data => { this.monsters = data.body; console.log(this.monsters); },
                    error: err => { console.log(err); }
                });
            }catch(error){
                console.log(error);
            }
        }else{
            console.log("Not Signed In");
        }
    }

    loadMonster(id: any){
        this._loginService.getMonsterOfId(id).subscribe({
            next: data => { this.currentMonster = data.body[0]; this.monsterSelected = true; console.log(this.currentMonster); },
            error: err => { console.log(err); }
        });
    }
    deleteMonster(id: any){
        this._loginService.deleteMonsterOfid(id).subscribe({
            next: data => { console.log(data); },
            error: err => { console.log(err); }
        });
    }
}
