import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  photos: Photo[] = [];
  filter = '';
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;
  userName: string;
  currentPage: number = 1;

  constructor(private activateRoute: ActivatedRoute, private service: PhotoService) { }

  ngOnInit(): void {
    this.userName = this.activateRoute.snapshot.params.userName;
    this.photos = this.activateRoute.snapshot.data.photos;
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filtro => this.filter = filtro);
  }

  ngOnDestroy(): void {
    this.debounce.complete();
  }

  load(): void {
    this.service.listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe((photos: Photo[]) => {
        this.photos = this.photos.concat(photos);
        if (!photos.length) this.hasMore = false;
      });
  }
}
