import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./pages/Home"
import Curses from "./pages/Curses"
import Itschool from './pages/Itschool';
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Java from './pages/Java';
import GraphicDesign from "./pages/GraphicDesign";
import Python from "./pages/Python"
import WebDev from "./pages/WebDev"
function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/curses' element={<Curses />} />
          <Route path='/Itschool' element={<Itschool />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/java' element={<Java />} />
          <Route path='/GraphicDesign' element={<GraphicDesign />} />
          <Route path='/Python' element={<Python />} />
          <Route path='/WebDev' element={<WebDev />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
