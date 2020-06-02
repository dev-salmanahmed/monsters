import React, { Component } from 'react';
import './App.scss';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/SearchBox.component';

class App extends Component {

  constructor(){
    super();
    this.state = {
      monsters: [],
      searchFieldValue: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users', {
      mode: 'no-cors' // 'cors' by default
    }).then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  render () {
    const { monsters, searchFieldValue } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchFieldValue.toLowerCase())
    );
    return (
          <div className="App">
            <h1 className='heading'>Monsters RoloDex</h1>
            <SearchBox placeholder='Search Monster' handleChange={e => this.setState({ searchFieldValue: e.target.value })} />
            <CardList monsters={filteredMonsters} />   
          </div>
    );
  }
}

export default App;
