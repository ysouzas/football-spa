import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { Player } from '../../models/player';
import { Observable } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { ShowTeamsComponent } from '../show-teams/show-teams.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  players: Player[] = [];
  displayedColumns: string[] = ['select', 'name', 'score'];
  playersToTeam: string[] = [];
  initialSelection = [];
  allowMultiSelect = true;
  selection = new SelectionModel<string>(
    this.allowMultiSelect,
    this.initialSelection
  );

  constructor(public playerService: PlayerService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.playerService.getAll().subscribe((players) => {
      this.players = players;
    });
  }

  selectPlayer(id: string) {
    const hasId = this.playersToTeam.includes(id);

    if (hasId) {
      const index = this.playersToTeam.indexOf(id, 0);
      if (index > -1) {
        this.playersToTeam.splice(index, 1);
      }
    } else {
      this.playersToTeam.push(id);
    }
  }

  generateTeams() {
    this.playerService.sortTeams(this.playersToTeam).subscribe((teams) => {
      let teamsToPrint = '';
      teams.forEach((element: any, index: any) => {
        teamsToPrint += `Time ${index + 1} - Score: ${element.score.toFixed(
          2
        )}\n`;
        element.players.forEach((a: any) => {
          teamsToPrint += `${a.name} - ${a.score.toFixed(2)}\n`;
        });
        teamsToPrint += `-------------------------------------\n`;
      });
      this.dialog.open(ShowTeamsComponent, {
        data: { teams: teamsToPrint },
        width: '137px',
      });
    });
  }
}
