import { Component, OnInit } from '@angular/core';
import {AcmePublicServices} from "../../core/service/acme-public-services.service";

@Component({
  selector: 'app-mockswitch',
  templateUrl: './mockswitch.component.html',
  styleUrls: ['./mockswitch.component.scss']
})
export class MockswitchComponent implements OnInit {

  constructor(private acmePublicServices: AcmePublicServices) { }

  ngOnInit(): void {
  }

  // really bad, never call functions like that
  mockStatus() {
    return this.acmePublicServices.USE_MOCK;
  }

  tomcatStatusSeparate() {
    return this.acmePublicServices.RUNNING_IN_SEPARATE_TOMCAT;
  }


  toggleMock() {
    this.acmePublicServices.USE_MOCK = !this.acmePublicServices.USE_MOCK;
  }

  toggleTomcat() {
    this.acmePublicServices.RUNNING_IN_SEPARATE_TOMCAT = !this.acmePublicServices.RUNNING_IN_SEPARATE_TOMCAT;
  }

  load() {
    this.acmePublicServices.loadAllClassifications();
  }
}
