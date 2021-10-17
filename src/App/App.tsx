import Nav from '../Nav/Nav';
import './App.css';

const App = () => {
  const height = window.innerHeight
  const width = window.innerWidth
  return (
      <div className="App">
        <img className="hex-img" 
        src={'./img/hex.png'}
        style={{width}}
        />
        <div className='content'>
          <Nav />
        </div>
      </div>
    
  );
}

export default App;
