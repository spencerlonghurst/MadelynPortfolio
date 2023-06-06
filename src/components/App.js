import '../styling/App.css';
import Header from './Header';
import About from './About';

function App() {
  return (
    <div className="App">
      <div className='top'>
      <Header/>
      <About/>
      </div>
    </div>
  );
}

export default App;
