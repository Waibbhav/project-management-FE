import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuCardComponent } from './menu-card/menu-card.component';

@NgModule({
  declarations: [HeaderComponent, MenuCardComponent],
  exports: [HeaderComponent, MenuCardComponent],
  imports: [CommonModule],
})
export class SharedModule {}
