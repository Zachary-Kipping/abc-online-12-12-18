import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.scss']
})
export class StatFiltersComponent implements OnDestroy {
  @Output() filterChanged = new EventEmitter<string>();
  videoFilter: FormControl;
  filterSubscription: Subscription;

  constructor(fb: FormBuilder) {
    this.videoFilter = fb.control('', Validators.required);

    this.filterSubscription = this.videoFilter.valueChanges.subscribe(value => this.filterChanged.emit(value));
  }

  ngOnDestroy() {
    this.filterSubscription.unsubscribe();
  }

}
