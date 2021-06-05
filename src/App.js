import './App.css';
import {Route} from 'react-router-dom';
import CountryList from './CountryList';
import CountryDetails from './CountryDetails';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={CountryList}></Route>
      <Route path="/country/:code" component={CountryDetails}></Route>     
    </div>
  );
}

export default App;
