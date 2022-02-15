import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginandregService } from '../services/loginandreg.service';

@Component({
    selector: 'app-monster-form',
    templateUrl: './monster-form.component.html',
    styleUrls: ['./monster-form.component.css']
})
export class MonsterFormComponent implements OnInit {
    monsterForm: FormGroup;
    finalCRPrediction: Number;

    constructor(private fb: FormBuilder, private _loginService: LoginandregService) {
        this.finalCRPrediction = -1;
        this.monsterForm = this.fb.group({
            hitPoints: ['', Validators.compose([Validators.required])],
            armourClass: ['', Validators.compose([Validators.required])],
            strength: ['', Validators.compose([Validators.required])],
            dexterity: ['', Validators.compose([Validators.required])],
            constitution: ['', Validators.compose([Validators.required])],
            intelligence: ['', Validators.compose([Validators.required])],
            wisdom: ['', Validators.compose([Validators.required])],
            charisma: ['', Validators.compose([Validators.required])],
            baseSpeed: ['', Validators.compose([Validators.required])],
            flySpeed: ['', Validators.compose([Validators.required])],
            burrowSpeed: ['', Validators.compose([Validators.required])],
            climbSpeed: ['', Validators.compose([Validators.required])],
            swimSpeed: ['', Validators.compose([Validators.required])],
            passiveNumber: ['', Validators.compose([Validators.required])],
            actionNumber: ['', Validators.compose([Validators.required])],
            maxAttackBonus: ['', Validators.compose([Validators.required])],
            maxDamage: ['', Validators.compose([Validators.required])],
            legendaryActions: ['', Validators.compose([Validators.required])],
            resistancesNumber: ['', Validators.compose([Validators.required])],
            immunitiesNumber: ['', Validators.compose([Validators.required])],
            saveClick: [''],
        });
    }

    ngOnInit(): void {
    }

    onSubmit(){
        if(this.monsterForm.valid){
            var objectData = {
                hp: this.monsterForm.controls['hitPoints'].value,
                ac: this.monsterForm.controls['armourClass'].value,
                base_speed: this.monsterForm.controls['baseSpeed'].value,
                fly_speed: this.monsterForm.controls['flySpeed'].value,
                burrow_speed: this.monsterForm.controls['burrowSpeed'].value,
                swim_speed: this.monsterForm.controls['swimSpeed'].value,
                climb_speed: this.monsterForm.controls['climbSpeed'].value,
                STR: this.monsterForm.controls['strength'].value,
                DEX: this.monsterForm.controls['dexterity'].value,
                CON: this.monsterForm.controls['constitution'].value,
                INT: this.monsterForm.controls['intelligence'].value,
                WIS: this.monsterForm.controls['wisdom'].value,
                CHA: this.monsterForm.controls['charisma'].value,
                passive_number: this.monsterForm.controls['passiveNumber'].value,
                action_number: this.monsterForm.controls['actionNumber'].value,
                max_damage: this.monsterForm.controls['maxDamage'].value,
                max_bonus: this.monsterForm.controls['maxAttackBonus'].value,
                legendary_number: this.monsterForm.controls['legendaryActions'].value,
                immunity_number: this.monsterForm.controls['immunitiesNumber'].value,
                resistance_number: this.monsterForm.controls['resistancesNumber'].value,
            }
            try{
                var predictedCr = "";
                this._loginService.getCR(objectData).subscribe({
                    next: data => { this.gotCR(data.body); },
                    error: err => { console.log(err); }
                });
            }catch(error){
                console.log(error);
            }
        }else{
            console.log(this.monsterForm.valid);
        }
    }

    gotCR(predictedCr: any){
        console.log(parseInt(predictedCr));
        this.finalCRPrediction = parseInt(predictedCr);
        this.finalCRPrediction = this.parseCR(this.finalCRPrediction);
        if(this.monsterForm.controls['saveClick'].value){
            this.addMonster(predictedCr);
        }else{
            alert("Predicted CR: " + this.finalCRPrediction);
        }
    }


    addMonster(predictedCr: any){
        var monsterData = {
            hp: this.monsterForm.controls['hitPoints'].value,
            predicted_cr: this.parseCR(predictedCr),
            ac: this.monsterForm.controls['armourClass'].value,
            base_speed: this.monsterForm.controls['baseSpeed'].value,
            fly_speed: this.monsterForm.controls['flySpeed'].value,
            burrow_speed: this.monsterForm.controls['burrowSpeed'].value,
            swim_speed: this.monsterForm.controls['swimSpeed'].value,
            climb_speed: this.monsterForm.controls['climbSpeed'].value,
            STR: this.monsterForm.controls['strength'].value,
            DEX: this.monsterForm.controls['dexterity'].value,
            CON: this.monsterForm.controls['constitution'].value,
            INT: this.monsterForm.controls['intelligence'].value,
            WIS: this.monsterForm.controls['wisdom'].value,
            CHA: this.monsterForm.controls['charisma'].value,
            passive_number: this.monsterForm.controls['passiveNumber'].value,
            action_number: this.monsterForm.controls['actionNumber'].value,
            max_damage: this.monsterForm.controls['maxDamage'].value,
            max_bonus: this.monsterForm.controls['maxAttackBonus'].value,
            legendary_number: this.monsterForm.controls['legendaryActions'].value,
            immunity_number: this.monsterForm.controls['immunitiesNumber'].value,
            resistance_number: this.monsterForm.controls['resistancesNumber'].value,
        }
        console.log(monsterData);
    }

    parseCR(initialCr: any){
        if(initialCr == 0){
            return 0;
        }
        if(initialCr == 1){
            return 0.125;
        }else if(initialCr == 2){
            return 0.25;
        }else if(initialCr == 3){
            return 0.5;
        }
        return initialCr - 3;
    }
}
