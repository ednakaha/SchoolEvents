import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { EventModel } from '../Models/event.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Input() singleEvent: EventModel | EventModel[];
  ev:EventModel;

  constructor( private dataService: DataService) {

  }

  IsFactory(name:string,duration:number,date:Date) {
    return (
    this.ev.name = name,
    this.ev.duration = duration,
    this.ev.date =date
    )
   }

  ngOnInit() {
  }
  saveEvent(): void {
    debugger;
 //   this.ev = new eventmo
    this.ev.name =  (<HTMLInputElement>document.getElementById("name")).value; 
    this.ev.duration =parseFloat((<HTMLInputElement>document.getElementById("duration")).value); 
    this.ev.date =new Date((<HTMLInputElement>document.getElementById("date")).value);
debugger;
  this.dataService.set(this.ev);
  }


}
