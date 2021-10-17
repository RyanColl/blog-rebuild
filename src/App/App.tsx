import Nav from '../Nav/Nav';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Welcome from '../Welcome/Welcome';
const App = () => {
  const height = window.innerHeight
  const width = window.innerWidth
  return (
      <div className="App">
        <img className="hex-img" 
        src={'./img/hex.png'}
        style={{width}}
        />
        <Nav />
        <div className='content'>
          <Switch>
            <Route path='/' exact>
              <Welcome />
            </Route>
          </Switch>
          
        </div>
      </div>
    
  );
}

export default App;
