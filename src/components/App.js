import '../styling/App.css';
import Header from './Header';
import About from './About';
import Content from './Content';

function App() {
  return (
    <div className="App">
      <div className='top'>
      <Header/>
      <About/>
      </div>
      <Content/>
    </div>
  );
}

export default App;
