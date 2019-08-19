import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

import { PhotoService } from "../photo/photo.service";
import { Photo } from "../photo/photo";

@Component({
    templateUrl: './photo-detail.component.html',
    styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {
    photo$: Observable<Photo>;
    idImage: number;

    constructor(
        private photoService: PhotoService,
        private router: ActivatedRoute) { }

    ngOnInit(): void {
        this.idImage = this.router.snapshot.params.idImage;
        this.photo$ = this.photoService.getById(this.idImage);
    }
}
