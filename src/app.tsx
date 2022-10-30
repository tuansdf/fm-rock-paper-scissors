import { useState } from "preact/hooks";
import { animated, useSpring } from "react-spring";
import {
  PaperButton,
  RockButton,
  ScissorsButton,
  VacantButton,
} from "./components/action-button-variances";
import ActionLabel from "./components/action-label";
import { AnnounceButton, InfoButton } from "./components/button-variances";
import { InfoModal } from "./components/info-modal";
import ScoreBoard from "./components/score-board";
import useGameStore, { ActionChoice } from "./stores/game.store";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const playPlayer = useGameStore((state) => state.playPlayer);
  const playOpponent = useGameStore((state) => state.playOpponent);

  const playerChoice = useGameStore((state) => state.player);
  const opponentChoice = useGameStore((state) => state.opponent);
  const resetGame = useGameStore((state) => state.reset);
  const score = useGameStore((state) => state.score);
  const isGameEnd = useGameStore((state) => state.end);
  const isWinning = useGameStore((state) => state.win);
  const decide = useGameStore((state) => state.decide);

  const styles = useSpring({
    opacity: opponentChoice !== null ? 1 : 0,
    y: opponentChoice !== null ? 0 : 50,
  });

  const endStyles = useSpring({
    opacity: isGameEnd ? 1 : 0,
    y: isGameEnd ? 0 : 40,
    scale: isGameEnd ? 1 : 0.8,
  });

  const play = (choice: ActionChoice) => {
    playPlayer(choice);
    setTimeout(() => {
      playOpponent();

      setTimeout(() => {
        decide();
      }, 500);
    }, 500);
  };

  return (
    <>
      <div className="bg-gr bg-background flex h-full min-h-screen flex-col items-center">
        <div className="flex h-full w-full max-w-screen-mobile flex-1 flex-col items-center pt-8 pb-16">
          <ScoreBoard score={score} />

          <div className="relative flex w-full flex-1 flex-col items-center justify-center gap-4">
            {playerChoice === null ? (
              <>
                <img
                  src="/bg-triangle.svg"
                  alt=""
                  className="absolute w-48 select-none"
                />
                <div className="flex gap-8">
                  <PaperButton onClick={() => play(ActionChoice.Paper)} />
                  <ScissorsButton onClick={() => play(ActionChoice.Scissors)} />
                </div>
                <RockButton onClick={() => play(ActionChoice.Rock)} />
              </>
            ) : (
              <div className="grid grid-rows-2 place-items-center gap-16">
                <div className="grid grid-cols-2 gap-16">
                  <div className="flex flex-col items-center justify-center gap-4">
                    {playerChoice === ActionChoice.Paper ? (
                      <PaperButton disabled />
                    ) : playerChoice === ActionChoice.Scissors ? (
                      <ScissorsButton disabled />
                    ) : playerChoice === ActionChoice.Rock ? (
                      <RockButton disabled />
                    ) : null}
                    <ActionLabel text="You picked" />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-4">
                    {opponentChoice === ActionChoice.Paper ? (
                      <animated.div style={styles}>
                        <PaperButton disabled />
                      </animated.div>
                    ) : opponentChoice === ActionChoice.Rock ? (
                      <animated.div style={styles}>
                        <RockButton disabled />
                      </animated.div>
                    ) : opponentChoice === ActionChoice.Scissors ? (
                      <animated.div style={styles}>
                        <ScissorsButton disabled />
                      </animated.div>
                    ) : (
                      <VacantButton />
                    )}
                    <ActionLabel text="The house picked" />
                  </div>
                </div>
                {isGameEnd ? (
                  <animated.div
                    style={endStyles}
                    className="grid gap-6 text-center"
                  >
                    <div className="text-6xl font-bold uppercase text-white">
                      You {isWinning ? "win" : "lose"}
                    </div>
                    <AnnounceButton text="play again" onClick={resetGame} />
                  </animated.div>
                ) : null}
              </div>
            )}
          </div>

          <InfoButton text="rules" onClick={() => setOpenModal(true)} />
          <InfoModal
            isOpen={openModal}
            closeModal={() => setOpenModal(false)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
