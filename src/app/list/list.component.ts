import { Component, OnInit } from '@angular/core';
import { EventModel } from '../Models/event.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

 private listEvents:EventModel[]|EventModel;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.listEvents = this.dataService.get();
    console.log(this.listEvents);
  }

}
