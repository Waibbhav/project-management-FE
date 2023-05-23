import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DefaultComponent } from '@project/modal';
import { FormBuilder, FormControl,FormGroup } from '@angular/forms';
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

  constructor(private dialog: MatDialog,
    private fbuild:FormBuilder) { }

  ngOnInit(): void {
    this.addForm=this.fbuild.group({
      search:[''],
      date1:['']
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

  removeText(){
    this.removeX1=false
    this.addForm.patchValue({search:''})
  
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
