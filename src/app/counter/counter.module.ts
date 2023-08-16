import { NgModule } from "@angular/core";
import { CounterComponent } from './counter-component-file/counter.component';


@NgModule({
    declarations:[
        CounterComponent
    ],
    exports: [
        CounterComponent
    ],
    imports: []
})
export class CounterModule {}