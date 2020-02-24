import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRowEntryComponent } from './main-row-entry/main-row-entry.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import { MainRowEntriesComponent } from './main-row-entries/main-row-entries.component';
import { ClassificationInputComponent } from './main-row-entry/classification-input/classification-input.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CoreModule} from "../core/core.module";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [MainRowEntryComponent, MainRowEntriesComponent, ClassificationInputComponent],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatTableModule
  ],
  exports: [
    MainRowEntriesComponent

  ]
})
export class ComponentsModule { }
