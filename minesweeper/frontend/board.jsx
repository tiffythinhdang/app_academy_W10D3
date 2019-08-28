import React from 'react';
import Tile from './tile';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="board">
        {this.props.board.grid.map( (row, i) => {
          return (
            <div className="board-row">
              {row.map((tileObj, j) => {
                return (
                  <Tile tile={tileObj} updates={this.props.updates} />
                  // <div>{col.pos}</div>
                );
              })
              }
            </div>
          );
        })
        }

      </div>
    );
  }
}

export default Board;