import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { PhotoListComponent } from "./photo-list.component";
import { PhotosComponent } from "./photos/photos.component";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { FilterByDescription } from "./filter-by-description.pipe";
import { PhotoModule } from "../photo/photo.module";
import { PhotoSearchComponent } from "./search/photo-search.component";
import { CardModule } from "src/app/shared/components/card/card.module";
import { DarkenOnHoverModule } from "src/app/shared/directives/darken-on-hover/darken-on-hover.module";

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription,
        PhotoSearchComponent
    ],
    imports: [
        CommonModule,
        PhotoModule,
        CardModule,
        DarkenOnHoverModule,
        RouterModule
    ]
})
export class PhotoListModule {}