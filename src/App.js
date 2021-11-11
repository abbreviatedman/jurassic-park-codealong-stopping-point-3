import React from 'react';
import Headings from './components/Headings';
import species from './data/species'
import './App.css'
import ParkInfo from './components/ParkInfo';
import Park from './components/Park';
import Buttons from './components/Buttons';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      dinos: [],
      numberOfDinos: 0,
      currentSpecies: species[0]
    }
  }

  getRandomSpecies = () => {
    const i = Math.floor(Math.random() * species.length)
    this.setState({currentSpecies: species[i]})
  }

  render() {
    return (
      <div className="App">
        <Headings />
        <Buttons randomSpeciesHandler={this.getRandomSpecies}/>
        <ParkInfo
          currentSpecies={this.state.currentSpecies.name}
          numberOfDinos={this.state.numberOfDinos}
        />
        <Park dinos={species}/>
      </div>
    );
  }
}

export default App;

function add(x, y) {
  return x + y;
}

const a = 3;
const b = 5;
const c = 8;
add(a, b);
add(b, c);
