import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { MaterialModule } from '@project/material.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
@NgModule({
  declarations: [DefaultComponent],
  entryComponents: [DefaultComponent],
  imports: [
    CommonModule,
    MaterialModule,
    NgScrollbarModule,

  ]
})
export class ModalModule { }
