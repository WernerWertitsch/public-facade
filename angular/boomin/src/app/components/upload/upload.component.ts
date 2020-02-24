import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  @Output()
  importFromText: EventEmitter<String> = new EventEmitter<String>();

  toImport: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  process() {
    this.importFromText.emit(this.toImport);
  }

}
