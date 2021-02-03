import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { HomeComponent } from './home/home.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { ListPersonsComponent } from './list-persons/list-persons.component';
import { StoreModule } from '@ngrx/store';
import { personaReducer } from './store/personas.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddPersonComponent,
    ListPersonsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({personas: personaReducer}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
