import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Classification, Product, ProductRequest} from "../domain";

@Injectable({
  providedIn: 'root'
})
export class StateService {

  allClassifications$: BehaviorSubject<Classification[]> = new BehaviorSubject<Classification[]>([]);
  mainRowEntries$: BehaviorSubject<MainRowEntry[]> = new BehaviorSubject<MainRowEntry[]>([]);
  loadingProcesses$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  nextAllClassifactions(classifications: Classification[]) {
    this.allClassifications$.next(classifications);
  }

  nextMainRowEntries(mainRowEntries: MainRowEntry[]) {
    this.mainRowEntries$.next(mainRowEntries);
  }

  nextConfirmedClassifications(returnedClassifications: Classification[]) {
    this.nextMainRowEntries(returnedClassifications.map(c => {
      const original = this.mainRowEntries$.value.filter(e => e.classificationRequest === c.name);
      if(original.length>0) {
        const m: MainRowEntry = new MainRowEntry();
        m.classification = c;
        m.product = new Product();
        m.product.value = original[0].proposedValueOnImport;
        m.product.classification = c;
        m.notRecognized = false;
        m.isNew = false;
        return m;
      }
    }))
  }

  newRow() {
    const entry = new MainRowEntry();
    entry.notRecognized = false;
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
  classification: Classification;
  product: Product;
  // not a nice solution but ok for this scope
  classificationRequest: string;
  proposedValueOnImport: number;
  notRecognized = true;
  isNew = true;
}
