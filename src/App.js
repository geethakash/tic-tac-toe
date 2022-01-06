import './App.css';
import React from 'react';
import Icon from './components/Icon';

const itemArray = new Array(9).fill(null);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: 'cross',
      winner: '',
    };
  }

  render() {
    const changeItem = (itemIndex) => {
      itemArray[itemIndex] = this.state.activePlayer;
      // Calling checkWinner Function.
      checkWinner(itemArray);

      // toggle activePlayer
      this.state.activePlayer === 'cross'
        ? this.setState({ activePlayer: 'circle' })
        : this.setState({ activePlayer: 'cross' });
    };

    const checkWinner = (items) => {
      console.log(items);
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      lines.forEach((i) => {
        const [a, b, c] = i;

        if (items[a] && items[a] === items[b] && items[a] === items[c]) {
          this.setState({ winner: 'We Have a Winner!' });
          //
        }
      });
      if (itemArray.every((val, i, arr) => val !== null) && this.state.winner) {
        this.setState({ winner: 'Tie!' });
        console.log('tie');
      }
    };

    const resetPlayGround = () => {
      itemArray.fill(null, 0, 9);
      this.setState({ winner: null });
    };

    return (
      <div className="container">
        <header>
          <h1>Tic-Tac-Toe</h1>

          {!this.state.winner ? (
            <>
              <p>Player</p>
              <div className="icon-container">
                <div
                  className={
                    this.state.activePlayer === 'cross'
                      ? 'icon active-icon'
                      : 'icon'
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    height="50"
                    viewBox="0 0 24 24"
                    width="50"
                  >
                    <path
                      d="M18.7071 5.29289C19.0976 5.68341 19.0976 6.31658 18.7071 6.7071L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.2929 6.70711C4.90238 6.31658 4.90238 5.68342 5.2929 5.29289C5.68342 4.90237 6.31659 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289Z"
                      fill="currentcolor"
                    />
                  </svg>
                </div>

                <div
                  className={
                    this.state.activePlayer === 'circle'
                      ? 'icon active-icon'
                      : 'icon'
                  }
                >
                  <div
                    style={{
                      width: '35px',
                      borderRadius: '50%',
                      border: '4px solid currentcolor',
                      height: '35px',
                    }}
                  ></div>
                </div>
              </div>
            </>
          ) : (
            <>
              <p>{this.state.winner}</p>
              <p style={{ textAlign: 'center', marginTop: '30px' }}>
                <button
                  onClick={() => resetPlayGround()}
                  className="reset-button"
                >
                  Play Again
                </button>
              </p>
            </>
          )}
        </header>
        <section className={this.state.winner ? 'disable-click' : ''}>
          <div className="grid-container">
            {itemArray.map((item, index) => (
              <div
                key={index}
                onClick={() => changeItem(index)}
                className={item ? 'disable-click' : ''}
              >
                <Icon value={item} />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
