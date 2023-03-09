import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SelectableCardComponent } from './components/selectable-card/selectable-card.component';

@NgModule({
  declarations: [SelectableCardComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatChipsModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [SelectableCardComponent],
})
export class SharedModule {}
