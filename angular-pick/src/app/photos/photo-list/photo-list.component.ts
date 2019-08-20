import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];
  filter = '';
  hasMore = true;
  userName: string;
  currentPage = 1;

  constructor(private activateRoute: ActivatedRoute, private service: PhotoService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.userName = params.userName;
      this.photos = this.activateRoute.snapshot.data.photos;
    });
  }

  load(): void {
    this.service.listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe((photos: Photo[]) => {
        this.filter = '';
        this.photos = this.photos.concat(photos);
        if (!photos.length) this.hasMore = false;
      });
  }
}
