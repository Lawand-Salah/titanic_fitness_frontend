import './App.css';
import Pages from "./Pages";
import DesktopHeader from './Components/DesktopHeader/DesktopHeader.js';
import MobileHeader from './Components/MobileHeader/MobileHeader.js';
import Wave from './Components/Wave/Wave.js';

function App() {
  return (
    <div className="App">
      <DesktopHeader/>
      <MobileHeader/>
      <Pages/>
    </div>
  );
}

export default App;
