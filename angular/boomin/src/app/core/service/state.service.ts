import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Classification, Product} from "../domain";

@Injectable({
  providedIn: 'root'
})
export class StateService {

  allClassifications$: BehaviorSubject<Classification[]> = new BehaviorSubject<Classification[]>([]);
  mainRowEntries$: BehaviorSubject<MainRowEntry[]> = new BehaviorSubject<MainRowEntry[]>([]);
  loadingProcesses$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  readyForProduct$: BehaviorSubject<MainRowEntry> = new BehaviorSubject<MainRowEntry>(undefined);

  constructor() { }

  nextAllClassifactions(classifications: Classification[]) {
    this.allClassifications$.next(classifications);
  }

  nextMainRowEntries(mainRowEntries: MainRowEntry[]) {
    this.mainRowEntries$.next(mainRowEntries);
  }

  nextConfirmedClassifications(returnedClassifications: Classification[]) {
    returnedClassifications.forEach(c => {
      const original = this.mainRowEntries$.value.filter(e =>
        e.classificationRequest === c.name);
      if(original.length>0) {
        const o = original[0];
        o.product = new Product();
        o.product.value = o.proposedValueOnImport ? o.proposedValueOnImport : 0;
        o.product.classification = c;
        o.notRecognized = o.product==undefined;
        o.isNew = false;
        if(o.product.value && o.product.classification) {
          this.readyForProduct$.next(o);
        }
      }

    });
  }

  newRow() {
    const entry = new MainRowEntry();
    entry.notRecognized = false;
    entry.product = new Product();
    entry.product.value = 0;
    this.mainRowEntries$.next(this.mainRowEntries$.value.concat(entry));
  }

  loadingStarted() {
    this.loadingProcesses$.next(this.loadingProcesses$.value+1);
  }

  loadingDone() {
    this.loadingProcesses$.next(this.loadingProcesses$.value-1);
  }


}

export class MainRowEntry {
  // classification: Classification;
  product: Product;
  // not a nice solution but ok for this scope
  classificationRequest: string;
  proposedValueOnImport: number;
  notRecognized = true;
  isNew = true;
}
