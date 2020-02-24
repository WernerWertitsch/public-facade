import {Component, Input, OnInit} from '@angular/core';
import {MainRowEntry, StateService} from "../../core/service/state.service";
import {Observable} from "rxjs";
import {Classification} from "../../core/domain";

@Component({
  selector: 'app-main-row-entries',
  templateUrl: './main-row-entries.component.html',
  styleUrls: ['./main-row-entries.component.scss']
})
export class MainRowEntriesComponent implements OnInit {
  displayedColumns=["name"]

  mainRowEntries$: Observable<MainRowEntry[]>;
  mainRowEntries: MainRowEntry[]; //it seems the matieral table doesnt deal properly with observables?
  allClassifications$: Observable<Classification[]>;

  constructor(private stateService: StateService) { }


  ngOnInit(): void {
    this.mainRowEntries$ = this.stateService.mainRowEntries$;
    this.allClassifications$ = this.stateService.allClassifications$;
    this.mainRowEntries$.subscribe(e=> {
      this.mainRowEntries = e;
    })
  }

}
