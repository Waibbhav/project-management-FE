import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from '@project/auth/auth.module';




@NgModule({
  declarations: [HeaderComponent, MenuCardComponent, SidebarComponent],
  exports: [HeaderComponent, MenuCardComponent, SidebarComponent],
  imports: [CommonModule,RouterModule,AuthModule],
})
export class SharedModule {}
