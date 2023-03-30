import { Component, OnInit } from '@angular/core';

import { Player } from './models/player';
import { PlayerService } from './services/player.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "Pelada Baixo Nivel";
  players: Player[] = [];
  idsToSort: string[] = [];
  times: string = "";
  hidden = true;
  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers() {
    this.playerService.getPlayers().subscribe((response: any) => {
      console.log(response);
      this.players = response;
    });
  }

  onSelectPlayer(id: string) {
    const hasId = this.idsToSort.includes(id);

    if (hasId) {
      const index = this.idsToSort.indexOf(id, 0);
      if (index > -1) {
        this.idsToSort.splice(index, 1);
      }
    } else {
      this.idsToSort.push(id);
    }
  }

  getTeams() {
    this.playerService.getTeams(this.idsToSort).subscribe((asd) => {
      var aaa = "";
      asd.forEach((element: any, index: any) => {
        aaa += `Time ${index + 1} - Score: ${element.score.toFixed(2)}\n`;
        element.teams.forEach((a: any) => {
          aaa += `${a.name} - ${a.generalScore.toFixed(2)}\n`;
        });
        aaa += `-------------------------------------\n`;
      });
      this.times = aaa;
      this.hidden = false;
    });
  }

  ranking() {
    this.playerService.ranking(this.idsToSort).subscribe((asd) => {
      var aaa = `Ranking ${asd.date} - ${new Date().toLocaleDateString(
        "pt-BR"
      )} \n`;
      console.log(asd);
      asd.players.forEach((element: any, index: any) => {
        aaa += `${index + 1} - ${element.name}: ${element.generalScore.toFixed(
          2
        )}\n`;
      });
      this.times = aaa;
      this.hidden = false;
    });
  }
}
