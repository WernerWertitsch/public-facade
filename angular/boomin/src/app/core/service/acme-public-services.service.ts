import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Classification, ClassificationRequest, Product} from "../domain";
import {MainRowEntry, StateService} from "./state.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AcmePublicServices {

  USE_MOCK = true;
  RUNNING_IN_SEPARATE_TOMCAT = false;

  constructor(private http: HttpClient, private stateService: StateService) {

  }



  loadAllClassifications(): void {
    this.http.get<Classification[]>(this.serverUrl("getAllClassifications"))
      .subscribe( r => this.stateService.nextAllClassifactions(r));
  }

  requestProduct(productRequst: Product) {
    this.http.post<Product>(this.serverUrl("getProduct"), productRequst).subscribe(enrich => {
      // this is very 1990ies, not good at all, but not enough time to react
      productRequst.premium = enrich.premium;
      productRequst.insuredFrom = enrich.insuredFrom;
      productRequst.cancelled = enrich.cancelled;
      productRequst.feePrct = enrich.feePrct;
      productRequst.insured = enrich.insured;
      productRequst.id = enrich.id;
    })
  }

  import(asText: string) {
    const mainRowEntries = asText.split("\n").map(line => {
      const pair = line.split(";");
      if(pair.length>1) {
        const mainRowEntry = new MainRowEntry();
        mainRowEntry.classificationRequest = pair[0];
        mainRowEntry.proposedValueOnImport = +pair[1].replace(",",".").split(" ").join("");
        mainRowEntry.isNew = false;
        return mainRowEntry;
      }
      return undefined;
    }).filter(e => e!=undefined);
    this.classify(mainRowEntries);
    this.stateService.mainRowEntries$.next(mainRowEntries);

  }


  private classify(rows: MainRowEntry[]): void {
    const classificationRequest = new ClassificationRequest();
    classificationRequest.substanceNames = rows.map(m => m.classificationRequest);
    this.http.post<Classification[]>(this.serverUrl("getClassificationsFor"), classificationRequest)
      .subscribe( c =>
        this.stateService.nextConfirmedClassifications(c));
  }

  newRow() {
    this.stateService.newRow();
  }

  private serverUrl(service: string): string {
    const s = this.USE_MOCK ? `${service}Mock` : service;
    return this.RUNNING_IN_SEPARATE_TOMCAT ? `/api/${s}`:`/${s}`;
  }

}
