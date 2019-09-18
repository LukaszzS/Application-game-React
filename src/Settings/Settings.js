import React from 'react';
import lang from '../lang.json';
import './Settings.css';
import { EventEmitter } from '../EventEmitter'


class Settings extends React.Component {
  setLang(lang) {
    localStorage.setItem('lang', lang);
    EventEmitter.dispatch('langChange', true)
  }

  render() {
    return (
      <div className="container__settings">
          <div className="container__settings__text">
              <div className="settings__general">
                  <h1>{lang[localStorage.getItem("lang")].gobalSettings}</h1>
                  <div>
                    <h3>{lang[localStorage.getItem("lang")].pleaseSelect}</h3>

                    <button className="btn btn-danger" onClick={this.setLang.bind(this, 'pl')}>PL</button>
                    <button className="btn btn-primary" onClick={this.setLang.bind(this, 'en')}>EN</button>
                  </div>
              </div>
              <div className="settings__tictactoe">
                  <h2>{lang[localStorage.getItem("lang")].settingsTicTacToe}</h2>
                  <div>
                    <h3>{lang[localStorage.getItem("lang")].pleaseNumberOfPlayers}</h3>
                    <button className="btn btn-outline-danger">1</button>
                    <button className="btn btn-outline-primary">2</button>
                  </div>
              </div>
              <div className="settings__paddle">
                  <h2>{lang[localStorage.getItem("lang")].settingsPaddlegame}</h2>
                  <div>
                    <h3>{lang[localStorage.getItem("lang")].pleaseSetTheSpeedTheBall}</h3>
                    <input type="range" name="points" min="1" max="50" className="input_range"></input>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Settings;