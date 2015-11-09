var Board = React.createClass({

  render: function(){
    var grid = this.props.board.grid.map(function(row){
                    return (<div>
                        {row.map(function(){
                          return <Tile />;
                        })}
                    </div>);
               });
    return (
             <div>
               {grid}
             </div>
           );
  }
});

var Tile = React.createClass({
  render: function(){
    return <span className="tile">T</span>;
  }

});



var Game = React.createClass({
  getInitialState: function() {
    return { board: new window.Minesweeper.Board(8,6),
             over: false,
             won: false
           };
  },
  updateGame: function() {
    return;
  },
  render: function() {
    return (
          <div>
            <Board board={this.state.board} update={this.updateGame} />
          </div>
        );
  }
});

React.render (
  <Game />,
  document.getElementById("minesweeper")
);
