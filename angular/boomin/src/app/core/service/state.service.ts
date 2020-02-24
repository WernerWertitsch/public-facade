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

  constructor() { }

  nextAllClassifactions(classifications: Classification[]) {
    this.allClassifications$.next(classifications);
  }

  nextMainRowEntries(mainRowEntries: MainRowEntry[]) {
    this.mainRowEntries$.next(mainRowEntries);
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
}
