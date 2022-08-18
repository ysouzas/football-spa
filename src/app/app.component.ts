import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Player } from './models/player';
import { PlayerService } from './services/player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pelada Baixo Nivel';
  players: Player[] = [];
  displayedColumns: string[] = ['position', 'name', 'generalScore', 'momentScore', 'mondayScore', 'wednesdayScore'];

  constructor(private playerService: PlayerService) { }


  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers() {
    this.playerService.getPlayers().subscribe((response: any) => {
      console.log(response)
      this.players = response;
    });
  }


}
