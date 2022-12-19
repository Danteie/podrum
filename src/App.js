import './App.css';
import Menu from './Commponent/Menu/Menu'
import About from './Commponent/About/About';
import Carousel from './Commponent/Carousel/Carousel';

function App() {
  return (
    <div className="App">
      <div className='landing-page'>
        <Menu />
      </div>
        <About />
        <Carousel />
    </div>
  );
}

export default App;
