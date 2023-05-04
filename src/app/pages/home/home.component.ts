import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DefaultComponent } from '@project/modal';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  addprojectModal() {
    this.dialog
      .open(DefaultComponent, {
        data: {
          type: 'addproject',
          data: '',
          filterData: '',
        },
      })
      .afterClosed()
      .subscribe((result) => {});
  }
}
