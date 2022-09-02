import Game from "../components/Game/Game";

import { GameProvider } from "../context";

import "./pagesStyles/Homepage.scss";

export const Homepage: React.FC = () => {
  return (
    <GameProvider>
      <main className='game'>
        <Game />
      </main>
    </GameProvider>
  );
};
