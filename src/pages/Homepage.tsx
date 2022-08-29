import Game from "../components/Game/Game";

import { GameProvider } from "../context";

export const Homepage: React.FC = () => {
  return (
    <GameProvider>
      <main>
        <Game />
      </main>
    </GameProvider>
  );
};
