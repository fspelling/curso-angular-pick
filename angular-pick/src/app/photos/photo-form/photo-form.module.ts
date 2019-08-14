import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { PhotoFormComponent } from "./photo-form.component";
import { VMessageModule } from "src/app/shared/components/vmessage/vmessage.module";
import { PhotoModule } from "../photo/photo.module";
import { ImediateClickModule } from "src/app/shared/directives/imediate-click/imediate-click.module";

@NgModule({
    declarations: [
        PhotoFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        PhotoModule,
        ImediateClickModule
    ]
})
export class PhotoFormModule {}