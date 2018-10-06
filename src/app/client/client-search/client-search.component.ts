import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: [ './client-search.component.scss' ]
})
export class ClientSearchComponent implements OnInit {
  @Output() changedSearch: EventEmitter<string> = new EventEmitter<string>();
  searchBox: FormControl = new FormControl();

  constructor() {
  }
  
  ngOnInit(): void {
    this.searchBox.valueChanges
      .pipe(
          debounceTime(300),
          distinctUntilChanged()
      )
      .subscribe(
        (term) => {
          this.changedSearch.emit(term);
        }
      );      
  }
}
