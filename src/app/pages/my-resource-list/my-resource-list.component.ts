import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-resource-list',
  templateUrl: './my-resource-list.component.html',
  styleUrls: ['./my-resource-list.component.scss']
})
export class MyResourceListComponent implements OnInit {
  removeX1:boolean=false
  addForm!:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.addForm=new FormGroup({
      search:new FormControl('') 
     })
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
