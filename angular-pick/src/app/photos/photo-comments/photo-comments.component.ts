import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { switchMap, tap } from 'rxjs/operators';

import { PhotoComment } from "../photo/photo-comment";
import { PhotoService } from "../photo/photo.service";

@Component({
    selector: 'ap-photo-comments',
    templateUrl: './photo-comments.component.html'
})
export class PhotoCommentsComponent implements OnInit {
    @Input() photoID: number;

    commentForm: FormGroup;
    comments$: Observable<PhotoComment[]>;

    constructor(
        private photoService: PhotoService,
        private fb: FormBuilder) { }

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
                                             alert('cometario realziado com sucesso');
                                         }));
    }
}
