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
  ev: EventModel;

  constructor(private dataService: DataService) {

  }

  IsFactory(name: string, duration: number, date: Date) {
    return (
      this.ev.name = name,
      this.ev.duration = duration,
      this.ev.date = date
    )
  }

 
ngOnInit() {
}

getSelectedClasses(): number[] {
  let anArr: number[];
 /* $("input:checkbox[name=class]:checked").each(function () {
    anArr.push($(this).val());

  });*/
  return anArr;
}
saveEvent(): void {
  alert('in');
    this.ev = {

    //   this.ev = new eventmo
    id: null,
    name: (<HTMLInputElement>document.getElementById("name")).value,
    duration: parseFloat((<HTMLInputElement>document.getElementById("duration")).value),
    date: new Date((<HTMLInputElement>document.getElementById("date")).value),
    classes: this.getSelectedClasses()
  }
    this.dataService.set(this.ev);
}


}
