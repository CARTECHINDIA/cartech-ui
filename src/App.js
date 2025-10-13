import logo from './logo.svg';
import './App.css';
import Navbar from './component/Layout/Navbar';
import Home from './component/Ui/Home';
import UsedCars from './component/Ui/UsedCars';

function App() {
  return (
    <div>
 <Navbar/>
 <Home/>
 <UsedCars/>
    </div>
  );
}

export default App;
