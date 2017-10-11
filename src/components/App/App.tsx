import './App.less';
import * as React from 'react';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <h1>acerous</h1>
        <SearchBar/>
        <BusinessList/>
      </div>
    );
  }
}
export default App;
