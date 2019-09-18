import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './App.css';
import HomePage from './HomePage/HomePage';
import TicTacToe from './TicTacToe/TicTacToe';
import PaddleGame from './PaddleGame/PaddleGame';
import Settings from './Settings/Settings';
import lang from './lang.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableTennis, faIgloo, faTools, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from './EventEmitter';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      settingsChangedOn: null
    }

    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "en");
    }

    EventEmitter.subscribe('langChange', (event) => {
      this.setState({
        settingsChangedOn: new Date()
      })
    })
  }

  render() {
    return (
      <>
      <Router>
        <div className = "container">
            <Nav variant="tabs" defaultActiveKey="/home">
              <Nav.Item>
                <Link className="nav-link" to="/"><FontAwesomeIcon icon={faIgloo} /> {lang[localStorage.getItem('lang')].homePage}</Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link" to="/tictactoe"><FontAwesomeIcon icon={faTimesCircle}/> {lang[localStorage.getItem('lang')].ticTacToe}</Link>
              </Nav.Item>
              <Nav.Item>
              <Link className="nav-link" to="/paddle"><FontAwesomeIcon icon={faTableTennis}/> {lang[localStorage.getItem('lang')].paddleGame}</Link>
            </Nav.Item>
              <Nav.Item>
              <Link className="nav-link" to="/settings"><FontAwesomeIcon icon={faTools}/> {lang[localStorage.getItem('lang')].settings}</Link>
            </Nav.Item>
            </Nav>
        </div>

        <div className="container">
          <Route exact path="/" component={HomePage}/>
          <Route path="/tictactoe" component={TicTacToe}/>
          <Route path="/paddle" component={PaddleGame}/>
          <Route path="/settings" component={Settings}/>
        </div>
      </Router>
      </>
     );
  }
}

export default App;