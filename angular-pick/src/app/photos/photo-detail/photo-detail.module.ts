import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoDetailComponent } from './photo-detail.component';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsModule } from '../photo-comments/photo-comments.module';
import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';
import { ShowIfLoggedModule } from 'src/app/shared/directives/show-if-logged/show-if-logged.module';

@NgModule({
    declarations: [
        PhotoDetailComponent,
        PhotoOwnerOnlyDirective
    ],
    imports: [
        CommonModule,
        PhotoModule,
        PhotoCommentsModule,
        ShowIfLoggedModule
    ],
    exports: [
        PhotoDetailComponent
    ]
})
export class PhotoDetailModule { }
