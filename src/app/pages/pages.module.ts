import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '@project/shared/shared.module';
import { MaterialModule } from '@project/material.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { TaskBoardComponent } from './task-board/task-board.component';
import { ResourcePullComponent } from './resource-pull/resource-pull.component';
import { ModalModule } from '@project/modal/modal.module';
import { ResourcePullDetailsComponent } from './resource-pull-details/resource-pull-details.component';
import { NewProjectAddedComponent } from './new-project-added/new-project-added.component';
import { AddProjectDetailsComponent } from './add-project-details/add-project-details.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { RoadMapComponent } from './road-map/road-map.component';
import { BacklogComponent } from './backlog/backlog.component';
import { SprintComponent } from './sprint/sprint.component';
import { ManageDocumentsComponent } from './manage-documents/manage-documents.component';


@NgModule({
  declarations: [PagesComponent, HomeComponent, TaskBoardComponent, ResourcePullComponent, ResourcePullDetailsComponent, NewProjectAddedComponent, AddProjectDetailsComponent, ProjectDashboardComponent, RoadMapComponent, BacklogComponent, SprintComponent, ManageDocumentsComponent],
  imports: [CommonModule, PagesRoutingModule, SharedModule, MaterialModule, NgScrollbarModule, ModalModule ],
})
export class PagesModule {}
