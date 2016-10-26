import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <input type="text" [(ngModel)]="person.name" />
  `,
  styles: []
})
export class TwoWayBindingComponent {

  private person;

  constructor(){
   this.person = {
      name: "Max"
    };
  }

}
