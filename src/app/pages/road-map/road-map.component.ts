import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-road-map',
  templateUrl: './road-map.component.html',
  styleUrls: ['./road-map.component.scss']
})
export class RoadMapComponent implements OnInit {
  panelOpenState = false;
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
