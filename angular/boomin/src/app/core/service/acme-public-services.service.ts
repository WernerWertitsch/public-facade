import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Classification, ClassificationRequest} from "../domain";
import {MainRowEntry, StateService} from "./state.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AcmePublicServices {

  readonly USE_MOCK = true;

  constructor(private http: HttpClient, private stateService: StateService) {

  }

  loadAllClassifications(): void {
    this.http.get<Classification[]>(this.serverUrl("getAllClassifications"))
      .subscribe( r => this.stateService.nextAllClassifactions(r));
  }

  classify(rows: MainRowEntry[]): void {
    const classificationRequest = new ClassificationRequest();
    classificationRequest.substanceNames = rows.map(m => m.classificationRequest);
    this.http.post<Classification[]>(this.serverUrl("getClassificationsFor"), classificationRequest)
      .subscribe( c => this.stateService.nextAllClassifactions(c));
  }

  private serverUrl(service: string): string {
    const s = this.USE_MOCK ? `${service}Mock` : service;
    return `/api/${s}`;
  }

  import(asText: string) {
    this.stateService.nextMainRowEntries(asText.split("\r\n").map(line => {
    const pair = line.split(";");
      const mainRowEntry = new MainRowEntry();
      mainRowEntry.classificationRequest = pair[0];
      mainRowEntry.proposedValueOnImport = +pair[1];
      mainRowEntry.isNew = false;
      return mainRowEntry;
    }));
  }

  newRow() {
    this.stateService.newRow();
  }

}
