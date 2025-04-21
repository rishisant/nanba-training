import './assets/css/Root.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Navbar from './components/Navbar';
import Works from './pages/Works';
import Contact from './pages/Contact';
import Menu from './pages/menu';
import NewMenu from './pages/NewMenu';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<Introduction />} />
          <Route path="works" element={<Works />} />
          <Route path="contact" element={<Contact />} />
          <Route path="menu" element={<Menu />} />
          <Route path="newmenu" element={<NewMenu />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
