import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Game from "./components/Game/Game";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Game />
      </main>
      <Footer />
    </div>
  );
}

export default App;
