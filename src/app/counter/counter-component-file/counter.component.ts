import { Component } from "@angular/core";


@Component( {
    selector: 'counter-app',
    template: `
                <h1>{{title}}</h1>
                <h2>La base es de: {{base}}</h2>
                
                <button (click)="onAddSubtractClicked(-base)">-</button>
                
                <span>{{counter}}</span>
                
                <button (click)="onAddSubtractClicked(base)">+</button>
    `
})
export class CounterComponent {
    public title : string = 'Contador';
    public base  : number = 5;
    public counter : number = 0; 

    onAddSubtractClicked(value : number) {
    this.counter += value;
    }
}