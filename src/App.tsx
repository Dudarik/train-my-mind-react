import { Route, Routes } from "react-router-dom";

import { Homepage } from "./pages/Homepage";
import { Rulespage } from "./pages/Rulespage";
import { Aboutpage } from "./pages/Aboutpage";
import { Notfoundpage } from "./pages/Notfoundpage";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import "./App.css";

function App() {
  return (
    <>
      <div className='toggle_menu__overlay'>
        <div className='App'>
          <Header />

          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/rules' element={<Rulespage />} />
            <Route path='/about' element={<Aboutpage />} />
            <Route path='*' element={<Notfoundpage />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
