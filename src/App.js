import './App.css';
import Pages from "./Pages";
import DesktopHeader from './Components/DesktopHeader/DesktopHeader.js';
import MobileHeader from './Components/MobileHeader/MobileHeader.js';

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
