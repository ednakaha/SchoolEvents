import { Injectable } from '@angular/core';
import { EventModel } from '../app/Models/event.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private eventsArray: EventModel[];

  constructor() {
    this.eventsArray = [

      {
        id: 1,
        classes: [1, 2, 3],
        name: "Tu B'shvat",
        date: new Date(2018, 0, 21),
        duration:2.5
      },
      {
        id: 2,
        classes: [4,5,6],
        name: "Tu B'shvat - 2",
        date: new Date(2018, 0, 22),
        duration:4
      }
    ]
  }

  get(id?: number): (EventModel[] | EventModel) {
    if (id) {
      return this.eventsArray.find(e => e.id === id);
    } else {
      return this.eventsArray;
    }
  }
  set(EventModel){
      //save to localStorage
      localStorage.setItem("events", JSON.stringify(this.eventsArray));

  }
  delete(id: number) {
     
    debugger;
    const idx = this.eventsArray.findIndex(p => p.id == id);
    this.eventsArray.splice(idx, 1);
   }
}
