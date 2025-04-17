import './assets/css/Root.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Navbar from './components/Navbar';
import Works from './pages/Works';
import Contact from './pages/Contact';

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
