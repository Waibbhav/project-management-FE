import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.scss']
})
export class ProjectDashboardComponent implements OnInit {

  constructor() { }
  projectdatils:any[]=[]
  projectmember:any[]=[]
  hourhistorytext:any[]=[]
  ngOnInit(): void {
    this.projectdatils=[
      {heading:"45 Hours",description:"Total",projectimage: "./assets/images/hour11.svg"},
      {heading:"24 Hours",description:"Pending",projectimage: "./assets/images//hour12.svg"},
      {heading:"4",description:"Completed Task",projectimage: "./assets/images//hour13.svg"},
    ]
    this.projectmember=[
      {heading:"Angela Smith",description:"Bdm",projectimage: "./assets/images/leaveProfileImg.png"},
      {heading:"Angela Smith",description:"CSM/Delivery Manager",projectimage: "./assets/images/leaveProfileImg1.png"},
      {heading:"Angela Smith",description:"Project Manager ",projectimage: "./assets/images/leaveProfileImg2.png"},
      {heading:"Angela Smith",description:"Bdm",projectimage: "./assets/images/leaveProfileImg.png"},
      {heading:"Angela Smith",description:"CSM/Delivery Manager",projectimage: "./assets/images//leaveProfileImg1.png"},
      {heading:"Angela Smith",description:"Project Manager ",projectimage: "./assets/images//leaveProfileImg2.png"},
    ]
    this.hourhistorytext=[
      {heading:"Angela",date:"Aug 10",description:"Donec dictum sit amet arcu id ornare. Vestibulum at elementum quam, nec placerat nunc.",projectimage: "./assets/images/hours-history.svg"},
      {heading:"Angela",date:"Aug 10",description:"Donec dictum sit amet arcu id ornare. Vestibulum at elementum quam, nec placerat nunc.",projectimage: "./assets/images/hours-history.svg"},
      {heading:"Angela",date:"Aug 10",description:"Donec dictum sit amet arcu id ornare. Vestibulum at elementum quam, nec placerat nunc.",projectimage: "./assets/images/hours-history.svg"},
      {heading:"Angela",date:"Aug 10",description:"Donec dictum sit amet arcu id ornare. Vestibulum at elementum quam, nec placerat nunc.",projectimage: "./assets/images/hours-history.svg"},
      {heading:"Angela",date:"Aug 10",description:"Donec dictum sit amet arcu id ornare. Vestibulum at elementum quam, nec placerat nunc.",projectimage: "./assets/images/hours-history.svg"},
      {heading:"Angela",date:"Aug 10",description:"Donec dictum sit amet arcu id ornare. Vestibulum at elementum quam, nec placerat nunc.",projectimage: "./assets/images/hours-history.svg"},
    ]
  }
  viewMode = 'tab1';
}
