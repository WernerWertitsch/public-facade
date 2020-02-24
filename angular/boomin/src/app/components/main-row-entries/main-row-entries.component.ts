import {Component, Input, OnInit} from '@angular/core';
import {MainRowEntry, StateService} from "../../core/service/state.service";
import {Observable} from "rxjs";
import {Classification} from "../../core/domain";
import {AcmePublicServices} from "../../core/service/acme-public-services.service";

@Component({
  selector: 'app-main-row-entries',
  templateUrl: './main-row-entries.component.html',
  styleUrls: ['./main-row-entries.component.scss']
})
export class MainRowEntriesComponent implements OnInit {
  displayedColumns=["name", "category", "value", "feeprct", "premium", "insured"];

  mainRowEntries$: Observable<MainRowEntry[]>;
  mainRowEntries: MainRowEntry[]; //it seems the matieral table doesnt deal properly with observables?
  allClassifications$: Observable<Classification[]>;

  constructor(private stateService: StateService, private acmePublicServices: AcmePublicServices) { }


  ngOnInit(): void {
    this.mainRowEntries$ = this.stateService.mainRowEntries$;
    this.allClassifications$ = this.stateService.allClassifications$;
    this.mainRowEntries$.subscribe(e=> {
      this.mainRowEntries = e;
    })
  }

  requestProduct(mainRowEntry: MainRowEntry) {
    if(mainRowEntry.product.value && mainRowEntry.product.classification) {
      this.acmePublicServices.requestProduct(mainRowEntry.product);
    }
  }

  getCategoryFor(mainRowEntry: MainRowEntry) {
    return mainRowEntry?.product?.classification?.category?.name
  }

  classificationSelected(mainRowEntry: MainRowEntry, classification: Classification) {
      mainRowEntry.product.classification = classification;
      this.requestProduct(mainRowEntry);
  }
}
