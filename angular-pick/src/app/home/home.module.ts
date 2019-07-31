import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SignInComponent } from "./signin/signin.component";

@NgModule({
    declarations: [
        SignInComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HomeModule {}