import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    { url: '../assets/imgs/Capture001.png', alt: 'imagem 1' },
    { url: '../assets/imgs/Capture001.png', alt: 'imagem 2' }
  ];
}
