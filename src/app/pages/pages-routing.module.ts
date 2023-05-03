import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { TaskBoardComponent } from './task-board/task-board.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
