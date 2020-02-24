import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Classification} from "../../../core/domain";

@Component({
  selector: 'app-classification-input',
  templateUrl: './classification-input.component.html',
  styleUrls: ['./classification-input.component.scss']
})
export class ClassificationInputComponent implements OnInit {

  @Input()
  allClassifications$: Observable<Classification[]>;

  @Input()
  initialSelection: Classification;

  constructor() { }

  ngOnInit(): void {
  }

}
