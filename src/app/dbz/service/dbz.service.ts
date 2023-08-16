import { Injectable } from '@angular/core';
import { v4 as uuidV4 } from "uuid";

import { Character } from '../interface/dbz.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private characters : Character[] = [{
                                        id: uuidV4(),
                                        name: "Goku",
                                        power: 15000,
                                      },
                                      {
                                        id: uuidV4(),
                                        name: "Krilin",
                                        power: 800
                                      },
                                      {
                                        id: uuidV4(),
                                        name: "Vegeta",
                                        power: 7500
                                      },
                                      {
                                        id: uuidV4(),
                                        name: "Yamcha",
                                        power: 400
                                      }];

  public get characterGetter() : Character[] { return [...this.characters] }

  constructor() {
    
  }

  public getNewCharacter(data : Character){
    const newCharacter : Character = {...data, id: uuidV4()};
    this.characters.push(data);
  }

  public deleteCharacterById(id : string) {
    // this.characters.splice(id, 1);
    this.characters = this.characters.filter( character => character.id !== id );
  }

  public getCharacterToUpdateById(id : string) : Character {
    const foundCharacter : Character = this.characters.filter( character => character.id === id)[0];
    return foundCharacter;
  }

  public updateCharacterList(data : Character) {
    const foundIndex : number = this.characters.findIndex(character => character.id === data.id);
    this.characters[foundIndex] = data;
  }
}
