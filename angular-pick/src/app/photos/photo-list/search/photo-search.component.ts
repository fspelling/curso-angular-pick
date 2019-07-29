import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from "@angular/core";
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'ap-photo-search',
    templateUrl: './photo-search.component.html'
})
export class PhotoSearchComponent implements OnInit, OnDestroy {
    @Output() onTyping = new EventEmitter<string>();
    @Input() value = '';
    debounce: Subject<string> = new Subject<string>();

    ngOnInit(): void {
        this.debounce
            .pipe(debounceTime(300))
            .subscribe(filtro => this.onTyping.emit(filtro));
    }

    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }
}