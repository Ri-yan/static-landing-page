import './App.css';
import {LandingPage} from './Components'
import { Border } from './Components/border';
function App() {
  return (
    <div className="App">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 320"><path fill="#f0f4fd" 
      fill-opacity="1" d="M 0 100 L 400 0 L 800 100 "></path></svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 100"><path fill="#6587E040" 
      fill-opacity="1" d="M 0 50 L 400 150 L 800 50 "></path></svg> */}
<LandingPage/>
      <Border/>
    </div>
  );
}

export default App;
