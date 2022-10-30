import { animated, useSpring } from "react-spring";
import useGameStore, { ActionChoice } from "../stores/game.store";
import {
  PaperButton,
  RockButton,
  ScissorsButton,
  VacantButton,
} from "./action-button-variances";
import ActionLabel from "./action-label";

export default function OpponentResult() {
  const opponentChoice = useGameStore((state) => state.opponent);

  const styles = useSpring({
    opacity: opponentChoice !== null ? 1 : 0,
    y: opponentChoice !== null ? 0 : 50,
  });

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {opponentChoice === null ? (
        <VacantButton />
      ) : (
        <animated.div style={styles}>
          {opponentChoice === ActionChoice.Paper ? (
            <PaperButton disabled />
          ) : opponentChoice === ActionChoice.Rock ? (
            <RockButton disabled />
          ) : (
            <ScissorsButton disabled />
          )}
        </animated.div>
      )}
      <ActionLabel text="The house picked" />
    </div>
  );
}
