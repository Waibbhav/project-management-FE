import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '@project/shared/shared.module';
import { MaterialModule } from '@project/material.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { TaskBoardComponent } from './task-board/task-board.component';

@NgModule({
  declarations: [PagesComponent, HomeComponent, TaskBoardComponent],
  imports: [CommonModule, PagesRoutingModule, SharedModule, MaterialModule, NgScrollbarModule],
})
export class PagesModule {}
