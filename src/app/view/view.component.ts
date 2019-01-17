import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { EventModel } from '../Models/event.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  @Input() singleEvent:EventModel | EventModel[];
  @Output() deleteEvent: EventEmitter<number> = new  EventEmitter<number>();

 
  constructor(private dataService:DataService) {
  
   }

  ngOnInit() {
    //this.singleEvent = this.dataService.get(1);
  }
  delete():void {
    const seId = (<EventModel>(this.singleEvent)).id;
    this.deleteEvent.emit(seId);
  }

}

