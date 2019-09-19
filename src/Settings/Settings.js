import React from 'react';
import lang from '../lang.json';
import './Settings.css';
import { EventEmitter } from '../EventEmitter'


class Settings extends React.Component {
  constructor(props){
    super(props);
    this.state={
      gameSpeed: localStorage.getItem("gameSpeed") ? localStorage.getItem("gameSpeed") : "0"
    }
  }
  setLang(lang) {
    localStorage.setItem('lang', lang);
    EventEmitter.dispatch('langChange', true)
  }
  onSliderChange = (e) =>{
    const value = e.target.value;
    localStorage.setItem("gameSpeed", value);
    this.setState({
      gameSpeed:value
    })
  }

  render() {
    return (
      <div className="settings_img">
        <div className="settings">
        <h1>{lang[localStorage.getItem("lang")].gobalSettings}</h1>
            <div className="settings settings__box">
                <div className="settings__title">
                      <h2>{lang[localStorage.getItem("lang")].pleaseSelect}</h2>
                      <button className="btn btn-danger" onClick={this.setLang.bind(this, 'pl')}>PL</button>
                      <button className="btn btn-primary" onClick={this.setLang.bind(this, 'en')}>EN</button>
                </div>
            </div>
            {/* <div className="settings settings__box">
                <div className="settings__title">
                    <h2>{lang[localStorage.getItem("lang")].settingsTicTacToe}</h2>
                    <div>
                      <h3>{lang[localStorage.getItem("lang")].pleaseNumberOfPlayers}</h3>
                      <button className="btn btn-outline-danger">1</button>
                      <button className="btn btn-outline-primary">2</button>
                    </div>
                </div>
            </div> */}
            <div className="settings settings__box">
                <div className="settings__title">
                      <h2>{lang[localStorage.getItem("lang")].settingsPaddlegame}</h2>
                    <div>
                          <h3>{lang[localStorage.getItem("lang")].pleaseSetTheSpeedTheBall}</h3>
                          <input value={this.state.gameSpeed} onChange={this.onSliderChange} type="range" name="points" min="0" max="200" className="input_range"></input>
                        <div className="settinsMinMax">
                          <p>min</p>
                          <p>max</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Settings;