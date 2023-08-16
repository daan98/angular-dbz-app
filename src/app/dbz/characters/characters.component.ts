import { Component, Output, EventEmitter } from '@angular/core';
import { Character } from '../interface/dbz.interface';
import { DbzService } from '../service/dbz.service';

@Component({
  selector: 'app-dbz-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent {
  public get charactersInfo() {
    return this.dbzService.characterGetter
  }

  @Output() public onUpdate : EventEmitter<Character> = new EventEmitter();

  constructor(
    private dbzService : DbzService
  ) {}

  public onDeleteCharacter(id : string) : void {
    this.dbzService.deleteCharacterById(id);
  }

  public onUpdateCharacter(id : string) : void {
    const characterToUpdate : Character = this.dbzService.getCharacterToUpdateById(id);
    console.log('onUpdateCharacter characters: ', characterToUpdate);
    this.onUpdate.emit(characterToUpdate);
  }
}
