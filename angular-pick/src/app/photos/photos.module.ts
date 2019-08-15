import { NgModule } from '@angular/core';

import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoModule } from './photo/photo.module';
import { PhotoDetailModule } from './photo-detail/photo-detail.module';

@NgModule({
    imports: [
        PhotoListModule,
        PhotoFormModule,
        PhotoModule,
        PhotoDetailModule
    ]
})
export class PhotosModule { }
