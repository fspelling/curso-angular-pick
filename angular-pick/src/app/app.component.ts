import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photo/photo.service';
import { Photo } from './photo/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService.listFromUser('flavio')
      .subscribe(photos => this.photos = photos);
  }
}
