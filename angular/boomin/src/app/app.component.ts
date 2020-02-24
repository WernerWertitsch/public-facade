import {Component, OnInit} from '@angular/core';
import {AcmePublicServices} from "./core/service/acme-public-services.service";
import {StateService} from "./core/service/state.service";
import {catchError} from "rxjs/operators";
import {of} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'boomin';

  constructor(private service: AcmePublicServices, private stateService: StateService) {

  }

  ngOnInit(): void {
    this.service.loadAllClassifications();
    this.stateService.allClassifications$.pipe(
      catchError(e => {
        setTimeout(t=> this.service.loadAllClassifications(), 3000);
        return of(e);
      })
    ).subscribe();
    this.stateService.newRow();
  }

  importFromText(text: string) {
    this.service.import(text);
  }


}
