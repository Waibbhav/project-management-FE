import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DefaultComponent } from '@project/modal';
@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {
  panelOpenState = false;
  removeX1:boolean=false
  addForm!:FormGroup
  constructor(private dialog: MatDialog) { }
 backlogDrop:boolean= false

  ngOnInit(): void {
    this.addForm=new FormGroup({
      search:new FormControl('') 
     })
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

  drop(){
this.backlogDrop = ! this.backlogDrop
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
