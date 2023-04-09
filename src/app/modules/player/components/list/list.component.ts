import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { Player } from '../../models/player';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  players: Player[] = [];
  displayedColumns: string[] = ['select', 'name', 'score'];
  playersToTeam: string[] = [];

  constructor(public playerService: PlayerService) {}

  ngOnInit(): void {
    this.playerService.getAll().subscribe((players) => {
      debugger;
      this.players = players;
    });
  }

  selectPlayer(id: string) {
    this.playersToTeam.push(id);
  }

  generateTeams() {
    this.playerService.sortTeams(this.playersToTeam).subscribe((teams) => {
      debugger;
      console.log(teams);
    });
  }
}
