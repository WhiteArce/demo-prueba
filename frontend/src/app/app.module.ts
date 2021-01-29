import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { ListPersonsComponent } from './list-persons/list-persons.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormModule, MatInputModule} from '@angular/material';

const modules = [
  MatButtonModule,
  MatFormModule,
  MatInputModule
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddPersonComponent,
    ListPersonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  exports:
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
