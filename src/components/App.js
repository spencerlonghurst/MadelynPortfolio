import '../styling/App.css';
import Header from './Header';
import About from './About';
import Content from './Content';
import Qualifications from "./Qualifications";

function App() {
  return (
    <div className="App">
      <div>
      <div className='top'>
        <Header/>
        <About/>
      </div>
      <Content/>
      <Qualifications/>
    </div>
    </div>
  );
}

export default App;
