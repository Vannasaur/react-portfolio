// Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div className='app-jsx'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
