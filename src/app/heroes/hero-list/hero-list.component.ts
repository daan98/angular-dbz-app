import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent {

  public heroes : string[] = ['Batman', 'Superman', 'Mujer maravilla', 'Shazam', 'Cyborg'];
  public heroDeleted : string = '';
  
  public deleteFirstHero() {
     this.heroDeleted = this.heroes.shift() || "";
  }

}
