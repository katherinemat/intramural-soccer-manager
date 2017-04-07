import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class PlayerService {

  players: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.players = angularFire.database.list('players');
  }

  getPlayers() {
    return this.players;
  }

  getPlayerById(playerId: string) {
    return this.angularFire.database.object('players/' + playerId);
  }

  addPlayer(newPlayer: Player) {
    this.players.push(newPlayer);
  }

  updatePlayer(localUpdatedPlayer) {
    var playerEntryInFirebase = this.getPlayerById(localUpdatedPlayer.$key);
    playerEntryInFirebase.update({
      name: localUpdatedPlayer.name,
      position: localUpdatedPlayer.author,
      age: localUpdatedPlayer.age,
      phone: localUpdatedPlayer.phone,
      notes: localUpdatedPlayer.notes
    });
  }

  deletePlayer(localPlayerToDelete) {
    var playerEntryInFirebase = this.getPlayerById(localPlayerToDelete.$key);
    playerEntryInFirebase.remove();
  }

  }
