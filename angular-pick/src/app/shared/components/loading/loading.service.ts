import { Subject, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { startWith } from "rxjs/operators";

import { LoadingType } from "./loading-type";

@Injectable({ providedIn: 'root' })
export class LoadingService {
    loadingSubject = new Subject<LoadingType>();

    getLoading(): Observable<LoadingType> {
        return this.loadingSubject.asObservable()
            .pipe(startWith(LoadingType.STOPED));
    }

    start() {
        this.loadingSubject.next(LoadingType.LOADING);
    }

    stoped() {
        this.loadingSubject.next(LoadingType.STOPED);
    }
}