library casino;

import 'dice.dart';
import 'player.dart';
import 'exceptions.dart';

class RollDiceGame {
  final List<Player> _players = <Player>[];

  addPlayer(Player player) {
    if (_players.length == 6) throw TooManyPlayersException();
    _players.add(player);
  }

  removePlayer(Player player) {
    _players.remove(player);
  }

  play(Dice dice) {
    var winningScore = dice.roll();

    for (var player in _players) {
      var bet = player.getBet();
      if (bet == null) continue;

      if (bet.score == winningScore) {
        player.win(bet.chips * 6);
      }
      else {
        player.lose(bet.chips);
      }
    }
  }
}