import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-road-map',
  templateUrl: './road-map.component.html',
  styleUrls: ['./road-map.component.scss']
})
export class RoadMapComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
    
  }

}
