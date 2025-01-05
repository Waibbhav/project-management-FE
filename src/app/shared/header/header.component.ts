import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DefaultComponent } from '@project/modal';
import {FormGroup,FormControl} from '@angular/forms'
import { StorageService } from '@project/services/storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchText: boolean = false;
  drop: boolean = false;
  removeX1: boolean = false;
  text: string = '';
  addForm!: FormGroup;

  constructor(public dialog: MatDialog , private storageService : StorageService , private router :Router) {}

  ngOnInit(): void {
    this.addForm = new FormGroup({
      search: new FormControl(''),
    });
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
  removeText() {
    this.removeX1 = false;
    this.addForm.reset();
  }
  removeX(e: any) {
    if (e.target.value != '') {
      this.removeX1 = true;
    } else {
      this.removeX1 = false;
    }
  }

 logout() {
   this.storageService.clearUser()
   this.storageService.clearCredential()
   this.router.navigate(["/login"])
 }
}
