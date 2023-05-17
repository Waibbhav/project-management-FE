import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DefaultComponent } from '@project/modal';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchText:boolean=false
  drop:boolean=false
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openSearchText(){
    this.searchText=!this.searchText
  }

  addprojectModal(){
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
  closeDrop(){
    this.drop=!this.drop
  }
}
