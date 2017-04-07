import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
  providers: [PlayerService]
})
export class EditPlayerComponent implements OnInit {
  @Input() selectedPlayer;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  beginUpdatingPlayer(playerToUpdate) {
    this.playerService.updatePlayer(playerToUpdate);
  }

  beginDeletingPlayer(playerToDelete) {
    if(confirm("Are you sure you want to delete this item from the inventory?")) {
      this.playerService.deletePlayer(playerToDelete);
    }
  }

}
