import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {combineLatest} from "rxjs";
import {Classification} from "../../../core/domain";
import {BehaviorSubject, Observable} from "rxjs";
import {map, tap} from "rxjs/operators";

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

  @Output()
  selectionOccurred: EventEmitter<Classification> = new EventEmitter<Classification>();

  allClassificationsFiltered$: Observable<Classification[]>;
  filterChange$: BehaviorSubject<string> = new BehaviorSubject<string>("");
  selection: Classification;
  filter: string='';

  byId: {[id:string]:Classification} = {};

  constructor() {

  }

  ngOnInit(): void {
    this.allClassifications$.subscribe(cs => cs.forEach(c => this.byId[c.id] = c));
    this.allClassificationsFiltered$ =  combineLatest([this.filterChange$, this.allClassifications$]).pipe(
      map(([s,cs]) => cs.filter(
        c => c.name.toLocaleLowerCase().indexOf(
          s.toLowerCase())>=0))
    )
  }

  filterChange() {
    this.filterChange$.next(this.filter);
  }

  // not so happy, but the mat options doesnt seem to separate between display value and actual value
  emitSelection($event: any) {
    this.filter = $event.source.value;
    this.selectionOccurred.emit(this.byId[$event.source.id]);
  }

}
