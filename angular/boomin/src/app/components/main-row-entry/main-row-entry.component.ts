import {Component, Input, OnInit} from '@angular/core';
import {MainRowEntry} from "../../core/service/state.service";
import {Observable} from "rxjs";
import {ProductRequest} from "../../core/domain";

@Component({
  selector: 'app-main-row-entry',
  templateUrl: './main-row-entry.component.html',
  styleUrls: ['./main-row-entry.component.scss']
})
export class MainRowEntryComponent implements OnInit {

  @Input()
  mainRowEntry$: Observable<MainRowEntry>;
  mainRowEntry: MainRowEntry;
  productRequest: ProductRequest;

  constructor() { }

  ngOnInit() {
    this.mainRowEntry$.subscribe(e => this.mainRowEntry = e);
    this.productRequest.classification = this.mainRowEntry.classification;
  }



}
