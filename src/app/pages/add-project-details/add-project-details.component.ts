import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-add-project-details',
  templateUrl: './add-project-details.component.html',
  styleUrls: ['./add-project-details.component.scss']
})
export class AddProjectDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

}
