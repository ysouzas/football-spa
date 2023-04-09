import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-show-teams',
  templateUrl: './show-teams.component.html',
  styleUrls: ['./show-teams.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowTeamsComponent {
  constructor(
    public dialogRef: MatDialogRef<ShowTeamsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
  }
}
