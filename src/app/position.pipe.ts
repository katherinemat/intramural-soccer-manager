import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';

@Pipe({
  name: 'position',
  pure: true
})
export class PositionPipe implements PipeTransform {

  transform(input: Player[], chosenPosition) {
    var output: Player[] = [];
    if (chosenPosition === "goalie") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].position === "Goal Keeper") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (chosenPosition === "defense") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].position === "Defense") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (chosenPosition === "mid") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].position === "Midfield") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (chosenPosition === "forward") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].position === "Forward") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
