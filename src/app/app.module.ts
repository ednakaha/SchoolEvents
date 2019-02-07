import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { DataService } from '../services/data.service';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ManuItemComponent } from './manu-item/manu-item.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { EventListComponent } from './event-list/event-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    AddComponent,
    ListComponent,
    HeaderComponent,
    MenuComponent,
    ManuItemComponent,
    AboutComponent,
    HomeComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
