import { Route, Routes } from "react-router-dom";

import { Homepage } from "./pages/Homepage";
import { Rulespage } from "./pages/Rulespage";
import { Aboutpage } from "./pages/Aboutpage";
import { Notfoundpage } from "./pages/Notfoundpage";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import "./App.css";
import { Statisticpage } from "./pages/Statisticpage";

function App() {
  return (
    <>
      <div className='App'>
        <Header />

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/rules' element={<Rulespage />} />
          <Route path='/about' element={<Aboutpage />} />
          <Route path='/statistic' element={<Statisticpage />} />
          <Route path='*' element={<Notfoundpage />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
