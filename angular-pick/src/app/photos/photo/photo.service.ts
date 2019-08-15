import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Photo } from './photo';
import { Observable } from 'rxjs';

const API = 'http://localhost:3000';

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

    getById(id: string): Observable<Photo> {
        return this.http.get<Photo>(`${API}/photos/${id}`);
    }
}
