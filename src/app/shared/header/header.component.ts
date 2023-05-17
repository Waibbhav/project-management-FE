import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DefaultComponent } from '@project/modal';
import {FormGroup,FormControl} from '@angular/forms'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchText:boolean=false
  drop:boolean=false
  removeX1:boolean=false
  text:string=''
  addForm!:FormGroup

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.addForm=new FormGroup({
     search:new FormControl('') 
    })

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
  removeText(){
    this.removeX1=false
    this.addForm.reset()
  
  }
  removeX(e:any){
    console.log(e.target.value);
    
    if(e.target.value!='')
    {
      this.removeX1=true
    }
    else{
      this.removeX1=false
    }
  }
  
  
}
