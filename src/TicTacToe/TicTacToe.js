import React from 'react';
import lang from '../lang.json';
import './TicTacToe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

class TicTacToe extends React.Component {
  constructor() {
    super();

    this.state = {
      player1: 'O',
      player2: 'X',
      turn: 0,
      board: [
        '', '', '',
        '', '', '',
        '', '', '',
      ],
      gameEnabled: true,
    }

    this.computerTurn = this.computerTurn.bind(this);
  }

  checkGameStatus(selectedPlayer) {
    if (!this.state.gameEnabled) { return }

    for (let i = 0; i <= 6; i = i + 3) {
      if (!!this.state.board[i] && !!this.state.board[i+1] && !!this.state.board[i+2]) {
          if (this.state.board[i] === this.state.board[i+1] && this.state.board[i+1] === this.state.board[i+2]) {
              this.endGame(selectedPlayer);
              return;
          }
      }
    }

    for (let i = 0; i < 3; i++) {
        if (!!this.state.board[i] && !!this.state.board[i+3] && !!this.state.board[i+6]) {
            if (this.state.board[i] === this.state.board[i+3] && this.state.board[i+3] === this.state.board[i+6]) {
                this.endGame(selectedPlayer);
                return;
            }
        }
    }

    if (!!this.state.board[0] && !!this.state.board[4] && !!this.state.board[8]) {
        if (this.state.board[0] === this.state.board[4] && this.state.board[4] === this.state.board[8]) {
            this.endGame(selectedPlayer);
            return;
        }
    }

    if (!!this.state.board[2] && !!this.state.board[4] && !!this.state.board[6]) {
        if (this.state.board[2] === this.state.board[4] && this.state.board[4] === this.state.board[6]) {
            this.endGame(selectedPlayer);
            return;
        }
    }

    if (this.state.gameEnabled && this.state.turn > 7) {
      this.endGame()
      return;
    }

    return;
  }

  getRandomInt() {
    let min = Math.ceil(0);
    let max = Math.floor(8);

    let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

    while (this.state.board[randomInt] !== '') {
      randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return randomInt;
  }

  computerTurn() {
    let { board } = this.state

    function _getRandomInt() {
      let min = Math.ceil(0);
      let max = Math.floor(8);

      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let computerFieldSelected = _getRandomInt();

    if (board[computerFieldSelected] === '') {
      board[computerFieldSelected] = 'o'
    } else if (this.state.gameEnabled && this.state.board.indexOf('') >= 0) {
      this.computerTurn();
      return;
    } else return;

    this.setState({
      turn: this.state.turn + 1,
      board
    })

    this.checkGameStatus('o');
  }

  async onFieldClick(index) {
    if (!this.state.gameEnabled) { return };
    if (this.state.board[index] !== '') { alert('To miejsce jest już zajęte!'); return };

    let board = this.state.board;
    board[index] = 'x';

    this.setState({
      turn: this.state.turn + 1,
      board
    }, this.computerTurn)

    this.checkGameStatus('x');
  }
  resetGameBoard(){
    this.setState({
      board: [
        '', '', '',
        '', '', '',
        '', '', '',
      ],
      turn: 0,
      winner:"",
      gameEnabled: true
    })
  }
  endGame(selectedPlayer) {
      console.log(this.state.turn);
    if (selectedPlayer && this.state.gameEnabled) {
      this.setState({
        gameEnabled: false,
        winner: selectedPlayer,
      });
    } else if (this.state.gameEnabled && this.state.turn > 7) {
      this.setState({
        gameEnabled: false,
        winner: 'Remis!',
      });
    }
  }
  render() {
      return (
        <>
          <div className="tictactoe">
            <div className="background-tictactoe">
              <div className="game-board">
                { this.state.board.map((field, key)=> {
                  return (
                    <div className="game-board--field"
                    onClick={this.onFieldClick.bind(this, key)} id={"field" + key}>
                      <div className="game-board--field-content"> {field} </div>
                  </div>
                  )
                }) }
              </div>
              <div className="side-menu">
                <div className="score-board"><FontAwesomeIcon icon={faMedal}/>{lang[localStorage.getItem('lang')].winner}</div>
                <div className="score">{this.state.winner}</div>
                <button onClick={this.resetGameBoard.bind(this)} className="btn-tictactoe">{lang[localStorage.getItem('lang')].startAgain}</button>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

export default TicTacToe;