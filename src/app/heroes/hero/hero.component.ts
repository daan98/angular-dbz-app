import { Component } from "@angular/core";


@Component({
    selector: 'hero-app',
    templateUrl: 'hero.component.html',
})
export class HeroComponent {
    public title : string = 'Hero Component';
    public name  : string = 'Batman';
    public age   : number = 40;

    public getNameAge() : string{ return `${this.name} - ${this.age}`; }

    get capitalizeName() : string { return this.name.toUpperCase(); }

    public onChangeNameClicked() : void { this.name = 'Shazam'; }

    public onChangeAgeClicked() : void { this.age = 15; }
}