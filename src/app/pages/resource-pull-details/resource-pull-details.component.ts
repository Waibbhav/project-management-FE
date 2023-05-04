import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-pull-details',
  templateUrl: './resource-pull-details.component.html',
  styleUrls: ['./resource-pull-details.component.scss']
})
export class ResourcePullDetailsComponent implements OnInit {

  constructor() { }
  viewMode = 'tab1';
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
        heading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry?", item: [
          { tableheading1: "Lorem Ipsum mmm is simply", tablepreview: "Preview",tabletime: "03.27", },
          { tableheading1: "Lorem Ipsum mmm is simply", tablepreview: "Preview",tabletime: "03.27", },
          { tableheading1: "Lorem Ipsum mmm is simply", tablepreview: "Preview",tabletime: "03.27", },    
          { tableheading1: "Lorem Ipsum mmm is simply", tablepreview: "Preview",tabletime: "03.27", },  
          { tableheading1: "Lorem Ipsum mmm is simply", tablepreview: "Preview",tabletime: "03.27", },
        ]
      },
      {
        heading: "Contrary to popular belief", item: [
          { tableheading1: "Lorem Ipsum mmm is simply", tablepreview: "Preview",tabletime: "03.27", },
          { tableheading1: "Lorem Ipsum mmm is simply", tablepreview: "Preview",tabletime: "03.27", },
          { tableheading1: "Lorem Ipsum mmm is simply", tablepreview: "Preview",tabletime: "03.27", },    
          { tableheading1: "Lorem Ipsum mmm is simply", tablepreview: "Preview",tabletime: "03.27", },  
          { tableheading1: "Lorem Ipsum mmm is simply", tablepreview: "Preview",tabletime: "03.27", },
        ]
      },   {
        heading: "There are many variations", item: [

          { tableheading1: "Lorem Ipsum mmm is simply", tablepreview: "Preview",tabletime: "03.27", },
          { tableheading1: "Lorem Ipsum mmm is simply", tablepreview: "Preview",tabletime: "03.27", },
          { tableheading1: "Lorem Ipsum mmm is simply", tablepreview: "Preview",tabletime: "03.27", },    
          { tableheading1: "Lorem Ipsum mmm is simply", tablepreview: "Preview",tabletime: "03.27", },  
          { tableheading1: "Lorem Ipsum mmm is simply", tablepreview: "Preview",tabletime: "03.27", },
        ]
      },   {
        heading: "The standard chunk of Lorem", item: [

          { tableheading1: "Lorem Ipsum mmm is simply", tablepreview: "Preview",tabletime: "03.27", },
          { tableheading1: "Lorem Ipsum mmm is simply", tablepreview: "Preview",tabletime: "03.27", },
          { tableheading1: "Lorem Ipsum mmm is simply", tablepreview: "Preview",tabletime: "03.27", },    
          { tableheading1: "Lorem Ipsum mmm is simply", tablepreview: "Preview",tabletime: "03.27", },  
          { tableheading1: "Lorem Ipsum mmm is simply", tablepreview: "Preview",tabletime: "03.27", },
        ]
      },   {
        heading: "Sed ut perspiciatis unde omnis iste natus", item: [
          { tableheading1: "Lorem Ipsum mmm is simply", tablepreview: "Preview",tabletime: "03.27", },
          { tableheading1: "Lorem Ipsum mmm is simply", tablepreview: "Preview",tabletime: "03.27", },
          { tableheading1: "Lorem Ipsum mmm is simply", tablepreview: "Preview",tabletime: "03.27", },    
          { tableheading1: "Lorem Ipsum mmm is simply", tablepreview: "Preview",tabletime: "03.27", },  
          { tableheading1: "Lorem Ipsum mmm is simply", tablepreview: "Preview",tabletime: "03.27", },
        ]
      },
    
    
    
    
    
    ]
  }

}
