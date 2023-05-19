import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DefaultComponent } from '@project/modal';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {
  selectDrop = false
  addNameStatus=false
  addNameStatus2=false
  addForm!:FormGroup
  removeX1:boolean=false

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.addForm=new FormGroup({
      search:new FormControl('') 
     })
 
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
  addName1(){
    this.addNameStatus=!this.addNameStatus
  }
  addName2(){
   this.addNameStatus2=!this.addNameStatus2 
  }
  removeText(){
    this.removeX1=false
    this.addForm.reset()
  
  }
  removeX(e:any){
    
    if(e.target.value!='')
    {
      this.removeX1=true
    }
    else{
      this.removeX1=false
    }
  }
}
