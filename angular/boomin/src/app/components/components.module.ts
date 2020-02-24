import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRowEntryComponent } from './main-row-entry/main-row-entry.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [MainRowEntryComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class ComponentsModule { }
