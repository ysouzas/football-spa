import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  imports: [CommonModule, CoreRoutingModule],
  exports: [MenuComponent, FooterComponent, NotFoundComponent, HomeComponent],
})
export class CoreModule {}
