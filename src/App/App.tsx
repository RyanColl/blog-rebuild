import Nav from '../Nav/Nav';
import './App.css';

const App = () => {
  const height = window.innerHeight
  return (
    <div className="App">
      <img className="hex-img" 
      src={'./img/hex.png'}
      style={{height}}
      />
      <Nav />
    </div>
  );
}

export default App;
