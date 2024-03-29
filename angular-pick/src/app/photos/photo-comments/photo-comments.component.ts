import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { switchMap, tap } from 'rxjs/operators';

import { PhotoComment } from "../photo/photo-comment";
import { PhotoService } from "../photo/photo.service";
import { AlertService } from "src/app/shared/alert/alert.service";

@Component({
    selector: 'ap-photo-comments',
    templateUrl: './photo-comments.component.html',
    styleUrls: ['./photo-comments.component.css']
})
export class PhotoCommentsComponent implements OnInit {
    @Input() photoID: number;

    commentForm: FormGroup;
    comments$: Observable<PhotoComment[]>;

    constructor(
        private photoService: PhotoService,
        private fb: FormBuilder,
        private alertService: AlertService) { }

    ngOnInit(): void {
        this.comments$ = this.photoService.getCommentsById(this.photoID);
        this.commentForm = this.fb.group({
            comment: ['', Validators.maxLength(300)]
        });
    }

    save() {
        const comment = this.commentForm.get('comment').value as string;
        this.comments$ = this.photoService.saveComment(this.photoID, comment)
                                         .pipe(switchMap(() => this.photoService.getCommentsById(this.photoID)))
                                         .pipe(tap(() => {
                                             this.commentForm.reset();
                                             this.alertService.Success('cometario realziado com sucesso');
                                         }));
    }
}
