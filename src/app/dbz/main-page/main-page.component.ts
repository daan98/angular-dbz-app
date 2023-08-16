import { Component } from '@angular/core';
import { Character } from '../interface/dbz.interface';

// import { v4 as uuidV4 } from "uuid";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  public toUpdate : Character = {
                                  id: "",
                                  name: "",
                                  power: 0
                                };
  constructor() { }

  public getCharacterDataToUpdate(data : Character) : void {
    console.log('getCharacterDataToUpdate data: ', data);
    this.toUpdate = data;
  }

}
