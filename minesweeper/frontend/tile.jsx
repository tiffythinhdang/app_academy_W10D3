import React from 'react';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { explored: this.props.tile.explored };

    this.handleClick = this.handleClick.bind(this);
    this.fetchText = this.fetchText.bind(this);
  }

  handleClick(e) {
    let foo = e.altKey;
    let tile = this.props.tile;
    let callback = this.props.updates;
    return callback(tile, foo);
  }

  fetchText() {
    let currTile = this.props.tile;
    
    if (currTile.flagged) {
      return <span role="img" aria-label="flag">🚩</span>;

    } else if (currTile.explored) {
      // this.state.explored = true;
      if (currTile.bombed) {
        return <span role="img" aria-label="bomb">💣</span>;
      } 
      let numBombs = currTile.adjacentBombCount();
      if ( numBombs > 0) {
        return numBombs;
      } 

    } else {
      return "";
    }
  }

  render() {
    return(
      <div className={"board-tile " + this.props.tile.explored} onClick={this.handleClick}>
        {this.fetchText()}
      </div>
    );
  }
}

export default Tile;