import {Component, Input, OnInit} from '@angular/core';
import {MainRowEntry, StateService} from "../../core/service/state.service";
import {Observable} from "rxjs";
import {Classification, ProductRequest} from "../../core/domain";

@Component({
  selector: 'app-main-row-entry',
  templateUrl: './main-row-entry.component.html',
  styleUrls: ['./main-row-entry.component.scss']
})
export class MainRowEntryComponent implements OnInit {

  @Input()
  mainRowEntry: MainRowEntry;

  allClassifications$: Observable<Classification[]>;


  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.allClassifications$ = this.stateService.allClassifications$;
  }



}
