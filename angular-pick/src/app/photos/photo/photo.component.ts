import { Component, Input } from '@angular/core';

import { environment } from '../../../environments/environment';

const cloud = `${environment.API_URL}/imgs/`;

@Component({
    selector: 'ap-photo',
    templateUrl: './photo.component.html'
})
export class PhotoComponent {
    private _url = '';

    @Input() description = '';

    @Input() set url(value: string) {
        if (value && value.startsWith('data')) {
            this._url = value;
        } else {
            this._url = `${cloud}${value}`;
        }
    }

    get url() {
        return this._url;
    }
}
