import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';
import { Player } from '../player.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  providers: [PlayerService]
})
export class TeamComponent implements OnInit {

  players: FirebaseListObservable<any[]>;
  filterByPosition: string = "allPlayers";
  currentRoute: string = this.router.url;

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  onChange(optionFromMenu) {
    this.filterByPosition = optionFromMenu;
  }

  goToDetailPage(clickedPlayer) {
    this.router.navigate(['player', clickedPlayer.$key]);
  };

}
