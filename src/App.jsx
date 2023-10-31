// Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";
import Header from "./components/headerComp.jsx";
import Footer from "./components/footerComp.jsx";

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
