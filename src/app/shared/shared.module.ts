import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [HeaderComponent, MenuCardComponent, SidebarComponent],
  exports: [HeaderComponent, MenuCardComponent, SidebarComponent],
  imports: [CommonModule],
})
export class SharedModule {}
