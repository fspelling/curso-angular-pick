import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhotoDetailComponent } from "./photo-detail.component";
import { PhotoModule } from "../photo/photo.module";
import { PhotoCommentsModule } from "../photo-comments/photo-comments.module";

@NgModule({
    declarations: [
        PhotoDetailComponent
    ],
    imports: [
        CommonModule,
        PhotoModule,
        PhotoCommentsModule
    ],
    exports: [
        PhotoDetailComponent
    ]
})
export class PhotoDetailModule { }