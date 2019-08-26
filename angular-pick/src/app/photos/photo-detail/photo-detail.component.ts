import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { AlertService } from 'src/app/shared/alert/alert.service';

@Component({
    templateUrl: './photo-detail.component.html',
    styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {
    photo$: Observable<Photo>;
    idImage: number;

    constructor(
        private photoService: PhotoService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private alertService: AlertService) { }

    ngOnInit(): void {
        this.idImage = this.activatedRoute.snapshot.params.idImage;
        this.photo$ = this.photoService.getById(this.idImage);
        this.photo$.subscribe(() => { }, error => this.router.navigate(['not-found']));
    }

    remove(): void {
        this.photoService.remove(this.idImage)
            .subscribe(() => {
                this.router.navigate(['']);
                this.alertService.Success('foto removida com sucesso');
            });
    }

    like(photo: Photo) {
        this.photoService.like(photo.id)
            .subscribe(res => {
                if (res)
                    this.photo$ = this.photoService.getById(this.idImage);
            })
    }
}
