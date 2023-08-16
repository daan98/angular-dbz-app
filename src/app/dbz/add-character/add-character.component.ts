import { Component, Input } from '@angular/core';
import { v4 as uuidV4 } from "uuid";

import { Character } from '../interface/dbz.interface';
import { DbzService } from '../service/dbz.service';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html'
})
export class AddCharacterComponent {

  @Input() newCharacterInfo  : Character = {
                                             id: uuidV4(),
                                             name: "Trunks",
                                             power: 14000
                                           };

  @Input() characterToUpdate : Character = {
                                             id: "",
                                             name: "",
                                             power: 0
                                           };
  //@Output() onNewCharacter : EventEmitter<Character> = new EventEmitter();

  constructor(
    private dbzService : DbzService
  ){}

  public onAddCharacter(){
    if(this.newCharacterInfo.name.trim().length === 0) {
      return;
    }

    if(this.newCharacterInfo.power <= 0) {
      return;
    }

    this.dbzService.getNewCharacter(this.newCharacterInfo);

    this.newCharacterInfo = {
                              id: "",
                              name: "",
                              power: 0,
                            };
  }

  public onUpdateCharacter(data : Character) {
    if(this.characterToUpdate.name.trim().length === 0) {
      return;
    }

    if(this.characterToUpdate.power <= 0) {
      return;
    }

    this.dbzService.updateCharacterList(this.characterToUpdate);

    this.characterToUpdate = {
                                id: "",
                                name: "",
                                power: 0
                              };
    if (this.newCharacterInfo.id) {
      this.newCharacterInfo = {
                                id: "",
                                name: "",
                                power: 0,
                              };
    }
  }
}
