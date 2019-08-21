import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoDetailComponent } from './photo-detail.component';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsModule } from '../photo-comments/photo-comments.module';
import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';

@NgModule({
    declarations: [
        PhotoDetailComponent,
        PhotoOwnerOnlyDirective
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
