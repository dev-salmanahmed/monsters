import React, { Component } from 'react';
import './App.scss';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/SearchBox.component';
import {monsters } from './utils/json/monsters';

class App extends Component {

  constructor(){
    super();
    this.state = {
      monsters: [],
      searchFieldValue: '',
      apiLoader: false,
      since: 30,
    }
  }

  componentDidMount() {
    this.getProfiles();
  }

  getProfiles = (loadmore = 0) => {
    this.setState({apiLoader: true, since: this.state.since + loadmore});
    fetch(`https://api.github.com/users?since=${this.state.since + loadmore}`)
    .then(response => response.json())
    .then(results => {
      this.setState({monsters: this.state.monsters.concat(results), apiLoader: false }) 
    }).catch(error => {
      console.log(error);
      this.setState({apiLoader: false });
    });
  }

  loadMore(){
    this.getProfiles(20);
  }

  searchProfile = () => {}

  render () {
    const { monsters, searchFieldValue } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.login.toLowerCase().includes(searchFieldValue.toLowerCase())
    );
    return (
          <div className="App">
            <h1 className='heading'>Monsters RoloDex</h1>
            { this.state.apiLoader ? 
              <div>Loading profiles</div>
            :
            <div> 
              <SearchBox placeholder='Search Monster' handleChange={e => this.setState({ searchFieldValue: e.target.value })} />
              <CardList monsters={filteredMonsters} />
              <div>
                <button onClick={() => this.loadMore()}> 
                   Load More
                </button>
                </div>
            </div>
            }   
          </div>
    );
  }
}

export default App;
