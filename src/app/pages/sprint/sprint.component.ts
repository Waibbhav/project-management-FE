import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DefaultComponent } from '@project/modal';
@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss']
})
export class SprintComponent implements OnInit {
  panelOpenState = false;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  assignTask(){
    this.dialog
    .open(DefaultComponent, {
      data: {
        type: 'assigntask',
        data: '',
        filterData: '',
      },
    })
    .afterClosed()
    .subscribe((result) => {});
  }
  sprintdetails(){
    this.dialog
    .open(DefaultComponent, {
      data: {
        type: 'sprint-details',
        data: '',
        filterData: '',
      },
    })
    .afterClosed()
    .subscribe((result) => {});
  }
 
}
