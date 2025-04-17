import './assets/css/Root.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Navbar from './components/Navbar';
import Works from './pages/Works';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Introduction />
        <Works/>
      </BrowserRouter>
    </>
  );
}

export default App;
