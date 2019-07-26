import { PipeTransform, Pipe } from "@angular/core";
import { Photo } from "../photo/photo";

@Pipe({ name: 'filterByDescription' })
export class FilterByDescription implements PipeTransform {
    transform(photos: Photo[], description: string) {
        description = description.toLowerCase().trim();

        if(description)
            return photos.filter(photo => photo.description.toLowerCase().trim().includes(description));
        else
            return photos;
    }
}
