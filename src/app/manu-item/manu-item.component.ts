import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-manu-item',
  templateUrl: './manu-item.component.html',
  styleUrls: ['./manu-item.component.css']
})
export class ManuItemComponent implements OnInit {

  @Input() menuItem;
  constructor() { }

  ngOnInit() {
  }

}
