import React from 'react';
import lang from '../lang.json';
import './Settings.css';
import { EventEmitter } from '../EventEmitter'


class Settings extends React.Component {
  constructor() {
    super();
  }

  setLang(lang) {
    localStorage.setItem('lang', lang);
    EventEmitter.dispatch('langChange', true)
  }

  render() {
    return (
      <div className="container__settings">
        <div className="container__settings__text">
          <div className="settings__general">
            <h1>ustawienie ogólne</h1>
            <h3>{lang[localStorage.getItem('lang')].desc}</h3> */}
            <h2>please select language:</h2>
            <button className="btn btn-danger" onClick={this.setLang.bind(this, 'pl')}>PL</button>
            <button className="btn btn-primary" onClick={this.setLang.bind(this, 'en')}>EN</button>
          </div>
          <div className="settings__tictactoe">
            <h2>ustawienie gry kółko i krzyzyk</h2>
            <h3>wybierz liczbę graczy</h3>
            <button className="btn btn-danger">1</button>
            <button className="btn btn-danger">2</button>
          </div>
          <div className="settings__paddle">
            <h2>ustawienie gry paddle game</h2>
            <h3>Ustaw prędkośc piłki</h3>
            <input type="range" name="points" min="1" max="10"></input>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;


// repo radka
    //     return (
//       <section>
//         <div className="container">
//           <h2>Please select language:</h2>
//           <button className="btn btn-danger" onClick={this.setLang.bind(this, 'pl')}>PL</button>
//           <button className="btn btn-primary" onClick={this.setLang.bind(this, 'en')}>EN</button>
//         </div>
//       </section>
//     );
//   } 
// }

// export default Settings;
