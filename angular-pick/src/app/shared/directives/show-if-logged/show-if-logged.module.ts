import { NgModule } from "@angular/core";

import { ShowIfLoggedDirective } from "./show-if-logged.directive";

@NgModule({
    declarations: [
        ShowIfLoggedDirective
    ],
    exports: [
        ShowIfLoggedDirective
    ]
})
export class ShowIfLoggedModule { }