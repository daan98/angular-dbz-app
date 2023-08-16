import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { HeroListComponent } from './hero-list/hero-list.component';


@NgModule({
    declarations: [
        HeroComponent,
        HeroListComponent
    ],
    exports: [
        HeroListComponent
    ],
    imports: [
        CommonModule // ES UTILIZADO DEBIDO A QUE SE EMPLEAN DIRECTIVAS PERSONALIZADAS DE ANGULAR
    ]
})
export class HeroesModule {}