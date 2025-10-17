import logo from './logo.svg';
import './App.css';
import Main from './component/Layout/Main';
import NavFoot from './component/Layout/NavFoot';
import { BrowserRouter, Route, Routes } from 'react-router-dom';   
import ScrollToTop from './ScrollToTop';
 

function App() {
  return (
    <div>
    <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<NavFoot/>}>
      <Route index element={<Main/>}/>
      {/* <Route path="about"element={<Aboutus/>}/> */}
  
       </Route>
      </Routes>    
    </BrowserRouter>
    </div>
  );
}

export default App;
