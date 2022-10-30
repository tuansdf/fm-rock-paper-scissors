import useGameStore, { ActionChoice } from "../stores/game.store";
import {
  PaperButton,
  RockButton,
  ScissorsButton,
} from "./action-button-variances";
import ActionLabel from "./action-label";

export default function PlayerResult() {
  const playerChoice = useGameStore((state) => state.player);

  return (
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
  );
}
