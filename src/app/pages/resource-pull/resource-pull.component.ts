import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DefaultComponent } from '@project/modal';
@Component({
  selector: 'app-resource-pull',
  templateUrl: './resource-pull.component.html',
  styleUrls: ['./resource-pull.component.scss']
})
export class ResourcePullComponent implements OnInit {

  constructor(private dialog: MatDialog)  { }

  ngOnInit(): void {
  }

  addnewresourceModal() {
    this.dialog
      .open(DefaultComponent, {
        data: {
          type: 'addnewresource',
          data: '',
          filterData: '',
        },
      })
      .afterClosed()
      .subscribe((result) => {});
  }
}
