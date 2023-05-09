import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DefaultComponent } from '@project/modal';
@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {
  panelOpenState = false;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  createSprint(){
    this.dialog
    .open(DefaultComponent, {
      data: {
        type: 'createsprint',
        data: '',
        filterData: '',
      },
    })
    .afterClosed()
    .subscribe((result) => {});
  }

}
