import logo from './logo.svg';
import './App.css';
import Navbar from './component/Layout/Navbar';
import Home from './component/Ui/Home';
import UsedCars from './component/Ui/UsedCars';
import Banner from './component/Ui/Banner';
import CustomerReview from './component/Ui/CustomerReview';
import Footer from './component/Layout/Footer';

function App() {
  return (
    <div>
 <Navbar/>
 <Home/>
 <UsedCars/>
  <Banner/>
  <CustomerReview/>
  <Footer/>
    </div>
  );
}

export default App;
