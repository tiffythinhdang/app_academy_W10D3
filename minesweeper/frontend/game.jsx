import React from 'react';
import { Tile as MinesweeperTile, Board as MinesweeperBoard } from './minesweeper.js';
import Board from './board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {board: new MinesweeperBoard(9, 8)};
    
    this.updateGame = this.updateGame.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  updateGame(tile, foo) {
    if (foo) {
      tile.toggleFlag();
    } else {
      tile.explore();

    }
    return this.setState({ board: this.state.board });
  }

  gameOver() {
    if (this.state.board.won()) {
      return (
        <div>
          <div className="modal-screen"></div>
          <div className="modal-alert">
            <p>"You Win!"</p>
            <button onClick={this.restartGame}>Restart Game</button>
          </div>
        </div>
      );
    } else if (this.state.board.lost()) {
      return (
        <div>
          <div className="modal-screen"></div>
          <div className="modal-alert">
            <p>"You Lost!"</p>
            <button onClick={this.restartGame}>Restart Game</button>
          </div>
        </div>
      );
    } else {
      return "";
    }
  }

  restartGame() {
    let newBoard = new MinesweeperBoard(9, 8);
    return this.setState({board: newBoard});
  }

  render() {
    return (
      <div>
        <Board board={this.state.board} updates={this.updateGame} />
        <div className="modal">
          {this.gameOver()}
        </div>
      </div>
    );
  }
}

export default Game;
