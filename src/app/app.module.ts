import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CharacterBuilder} from "./Components/CharacterComponent/CharacterComponent";
import {PainManagementRouteModule} from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    CharacterBuilder
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PainManagementRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
