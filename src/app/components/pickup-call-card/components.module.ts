import { NgModule } from "@angular/core";
import { PickupCallCardComponent } from "./pickup-call-card.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule
    ],
    declarations: [PickupCallCardComponent],
    exports: [PickupCallCardComponent]
})
export class ComponentsModule{}