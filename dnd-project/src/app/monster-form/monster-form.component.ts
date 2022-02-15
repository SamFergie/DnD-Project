import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-monster-form',
    templateUrl: './monster-form.component.html',
    styleUrls: ['./monster-form.component.css']
})
export class MonsterFormComponent implements OnInit {
    monsterForm: FormGroup;


    constructor(private fb: FormBuilder) {
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
            saveClick: ['', Validators.compose([Validators.required])],
        });
    }

    ngOnInit(): void {
    }

    onSubmit(){
        console.log("Submit");
    }

}
