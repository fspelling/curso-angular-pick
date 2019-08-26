import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Photo } from './photo';
import { PhotoComment } from './photo-comment';
import { environment } from '../../../environments/environment';

const API = environment.API_URL;

@Injectable({ providedIn: 'root' })
export class PhotoService {
    constructor(private http: HttpClient) { }

    listFromUser(userName: string): Observable<Photo[]> {
        return this.http.get<Photo[]>(`${API}/${userName}/photos`);
    }

    listFromUserPaginated(userName: string, page: number): Observable<Photo[]> {
        const params: HttpParams = new HttpParams().append('page', page.toString()); // montar querystring
        return this.http.get<Photo[]>(`${API}/${userName}/photos`, { params });
    }

    upload(description: string, allowComments: boolean, file: File): Observable<any> {
        const formData = new FormData();
        formData.append('description', description);
        formData.append('allowComments', allowComments ? 'true' : 'false');
        formData.append('imageFile', file);

        return this.http.post(`${API}/photos/upload`, formData);
    }

    getById(photoID: number): Observable<Photo> {
        return this.http.get<Photo>(`${API}/photos/${photoID}`);
    }

    getCommentsById(photoID: number): Observable<PhotoComment[]> {
        return this.http.get<PhotoComment[]>(`${API}/photos/${photoID}/comments`);
    }

    saveComment(photoID: number, commentText: string): Observable<any> {
        return this.http.post(`${API}/photos/${photoID}/comments`, { commentText });
    }

    remove(photoID: number): Observable<any> {
        return this.http.delete(`${API}/photos/${photoID}`);
    }

    like(photoID: number): Observable<string | boolean> {
        return this.http.post(`${API}/photos/${photoID}/like`, {}, { observe: 'response' })
                            .pipe(map(res => true))
                            .pipe(catchError(error => error.status == 304 ? of('false') : throwError(error)));
    }
}
