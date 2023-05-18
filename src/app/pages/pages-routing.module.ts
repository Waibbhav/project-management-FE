import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { TaskBoardComponent } from './task-board/task-board.component';
import { ResourcePullComponent } from './resource-pull/resource-pull.component';
import { ResourcePullDetailsComponent } from './resource-pull-details/resource-pull-details.component';
import { NewProjectAddedComponent } from './new-project-added/new-project-added.component';
import { AddProjectDetailsComponent } from './add-project-details/add-project-details.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { RoadMapComponent } from './road-map/road-map.component';
import { BacklogComponent } from './backlog/backlog.component';
import { SprintComponent } from './sprint/sprint.component';
import { ManageDocumentsComponent } from './manage-documents/manage-documents.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { MyResourceListComponent } from './my-resource-list/my-resource-list.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'task-board',
        component: TaskBoardComponent,
      },
      {
        path: 'resource-pull',
        component: ResourcePullComponent,
      },
      {
        path: 'resource-pull-details',
        component: ResourcePullDetailsComponent,
      },
      {
        path: 'new-project-added',
        component: NewProjectAddedComponent,
      },
      {
        path: 'add-project-details',
        component: AddProjectDetailsComponent,
      },
      {
        path: 'project-dashboard',
        component: ProjectDashboardComponent,
      },
      {
        path: 'my-resource-list',
        component: MyResourceListComponent,
      },
      {
        path: 'road-map',
        component:RoadMapComponent
      },
      {
        path :'backlog',
        component: BacklogComponent
      },
      {
        path :'sprint',
        component: SprintComponent
      },
      {
        path:'manage-documents',
        component: ManageDocumentsComponent
      },
      {
        path:'resource-pull',
        component: ResourcePullComponent 
      },
      {
        path:'task-board',
        component:TaskBoardComponent 
      },
      {
        path:'resource-pull-details',
        component:ResourcePullDetailsComponent
      },
      {
        path:'add-project-details',
        component:AddProjectDetailsComponent
      },
      {
        path:"timesheet",
        component:TimesheetComponent,
      },
      
      // {
      //   path:'',
      //   component:
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
