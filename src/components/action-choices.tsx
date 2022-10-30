import useGameStore, { ActionChoice } from "../stores/game.store";
import {
  PaperButton,
  RockButton,
  ScissorsButton,
} from "./action-button-variances";

export default function ActionChoices() {
  const playPlayer = useGameStore((state) => state.playPlayer);
  const playOpponent = useGameStore((state) => state.playOpponent);
  const decide = useGameStore((state) => state.decide);

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
    <div className="relative grid place-items-center">
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
    </div>
  );
}
