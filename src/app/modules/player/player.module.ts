import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { NewComponent } from './components/new/new.component';
import { ListComponent } from './components/list/list.component';
import { PlayerComponent } from './player.component';
import { PlayerService } from './services/player.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [PlayerComponent, NewComponent, ListComponent],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
  ],
  providers: [PlayerService],
})
export class PlayerModule {}
