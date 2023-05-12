import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DefaultComponent } from '@project/modal';
@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {
  selectDrop = false

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addNonProjectTask(){
    this.dialog
      .open(DefaultComponent, {
        data: {
          type: 'Non-Project-Task',
          data: '',
          filterData: '',
        },
      })
      .afterClosed()
      .subscribe((result) => {});
  }

  approvetTimesheet(){
    this.dialog
      .open(DefaultComponent, {
        data: {
          type: 'Approve-Timesheet',
          data: '',
          filterData: '',
        },
      })
      .afterClosed()
      .subscribe((result) => {});
  }

  selectProjectCatagory(){
    this.selectDrop=!this.selectDrop
  }
}
