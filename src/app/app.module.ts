import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { DataService } from '../services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    AddComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
