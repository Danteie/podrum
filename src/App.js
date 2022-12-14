import './App.css';
import Menu from './Commponent/Menu/Menu'
import About from './Commponent/About/About';

function App() {
  return (
    <div className="App">
      <div className='landing-page'>
        <Menu />
      </div>
        <About />
    </div>
  );
}

export default App;
