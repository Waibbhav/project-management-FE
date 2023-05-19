import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DefaultComponent } from '@project/modal';
@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss']
})
export class SprintComponent implements OnInit {
  panelOpenState = false;
  removeX1:boolean=false
  addForm!:FormGroup
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.addForm=new FormGroup({
      search:new FormControl('') 
     })
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
