import React, { Component } from 'react';
import ShowHideTech from "./components/ShowHideTech"
import FilterProjects from "./components/FilterProjects"

class App extends Component {
  render() {
    return (
      <div className="App" id="app-container">
      	<React.Fragment>

      		<ShowHideTech />
      		<FilterProjects />

      	</React.Fragment>
      </div>
    );
  }
}

export default App;
