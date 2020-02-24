import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import { MainRowEntriesComponent } from './main-row-entries/main-row-entries.component';
import { ClassificationInputComponent } from './main-row-entries/classification-input/classification-input.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CoreModule} from "../core/core.module";
import {MatTableModule} from "@angular/material/table";
import { UploadComponent } from './upload/upload.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
  declarations: [ MainRowEntriesComponent, ClassificationInputComponent, UploadComponent],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatTableModule,
    MatIconModule,
    MatExpansionModule,

  ],
  exports: [
    MainRowEntriesComponent,
    UploadComponent

  ]
})
export class ComponentsModule { }
