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

  // really bad
  status() {
    return this.acmePublicServices.USE_MOCK;
  }

  toggle() {
    this.acmePublicServices.USE_MOCK = !this.acmePublicServices.USE_MOCK;
  }
}
