import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-pull-details',
  templateUrl: './resource-pull-details.component.html',
  styleUrls: ['./resource-pull-details.component.scss']
})
export class ResourcePullDetailsComponent implements OnInit {

  constructor() { }
  viewMode = 'tab1';
  addCls=false;
  projectdatils:any[]=[]
  projectdatilscontain:any[]=[]
  ngOnInit(): void {
    this.projectdatils=[
      {heading:"Total Projects",description:"20"},
      {heading:"Completed Projects",description:"15"},
      {heading:"Assigned Projects",description:"7"},
      {heading:"Weekly Engagement",description:"35 hrs"},
    ]
    this.projectdatilscontain = [
      {
        heading: {
          item: [
            { tableheading1: "Lorem Ipsum mmm is simply", tablepreview: "Preview dd",tabletime: "03.27", },
            { tableheading1: "Lorem Ipsum mmm is simply", tablepreview: "Preview",tabletime: "03.27", },
            { tableheading1: "Lorem Ipsum mmm is simply", tablepreview: "Preview",tabletime: "03.27", },    
            { tableheading1: "Lorem Ipsum mmm is simply", tablepreview: "Preview",tabletime: "03.27", },  
            { tableheading1: "Lorem Ipsum mmm is simply", tablepreview: "Preview",tabletime: "03.27", },
          ]
        }, item: [
          { projectname: "DP0-3", projectimage: "./assets/images/redimageone.png",projectdescription: "Lorem ipsum dolor sit amet", },
          { projectname: "DP0-3", projectimage: "./assets/images/redimageone.png",projectdescription: "Lorem ipsum dolor sit amet", },
          { projectname: "DP0-3", projectimage: "./assets/images/redimageone.png",projectdescription: "Lorem ipsum dolor sit amet", },
          { projectname: "DP0-3", projectimage: "./assets/images/redimageone.png",projectdescription: "Lorem ipsum dolor sit amet", },
          { projectname: "DP0-3", projectimage: "./assets/images/redimageone.png",projectdescription: "Lorem ipsum dolor sit amet", },
         
        ]
      },
       
    
    
    
    
    
    ]
  }
  onShow(){
    this.addCls=!this.addCls;
  }
}
