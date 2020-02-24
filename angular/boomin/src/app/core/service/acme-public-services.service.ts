import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Classification, ClassificationRequest} from "../domain";
import {StateService} from "./state.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AcmePublicServices {

  constructor(private http: HttpClient, private stateService: StateService) {

  }

  loadAllClassifications(): void {
    this.http.get<Classification[]>("/getAllClassifications").subscribe( r => this.stateService.nextAllClassifactions(r));
  }

  getClassificationsFor(substanceNames: string[]): Observable<Classification[]> {
    const classificationRequest = new ClassificationRequest();
    classificationRequest.substanceNames = substanceNames;
    return this.http.post<Classification[]>("/getClassificationsFor", classificationRequest);
  }

}
