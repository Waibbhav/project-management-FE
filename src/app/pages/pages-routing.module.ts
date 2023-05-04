import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { TaskBoardComponent } from './task-board/task-board.component';
import { ResourcePullComponent } from './resource-pull/resource-pull.component';
import { ResourcePullDetailsComponent } from './resource-pull-details/resource-pull-details.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
