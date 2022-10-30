import { useState } from "preact/hooks";
import { animated, useSpring } from "react-spring";
import ActionChoices from "./components/action-choices";
import Announce from "./components/announce";
import { InfoButton } from "./components/button-variances";
import { InfoModal } from "./components/info-modal";
import OpponentResult from "./components/opponent-result";
import PlayerResult from "./components/player-result";
import ScoreBoard from "./components/score-board";
import useGameStore from "./stores/game.store";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const playerChoice = useGameStore((state) => state.player);
  const isGameEnd = useGameStore((state) => state.end);

  const styles = useSpring({
    opacity: isGameEnd ? 1 : 0,
    y: isGameEnd ? 0 : 40,
    scale: isGameEnd ? 1 : 0.8,
  });

  return (
    <>
      <div className="bg-gr bg-background flex h-full min-h-screen flex-col items-center">
        <div className="flex h-full w-full max-w-screen-mobile flex-1 flex-col items-center pt-8 pb-16">
          <ScoreBoard />

          <div className="relative flex w-full flex-1 flex-col items-center justify-center gap-4">
            {playerChoice === null ? (
              <ActionChoices />
            ) : (
              <div className="grid grid-rows-2 place-items-center gap-16">
                <div className="grid grid-cols-2 gap-16">
                  <PlayerResult />
                  <OpponentResult />
                </div>
                {isGameEnd ? (
                  <animated.div style={styles}>
                    <Announce />
                  </animated.div>
                ) : null}
              </div>
            )}
          </div>

          <InfoButton text="rules" onClick={() => setOpenModal(true)} />
        </div>
      </div>
      <InfoModal isOpen={openModal} closeModal={() => setOpenModal(false)} />
    </>
  );
}

export default App;
