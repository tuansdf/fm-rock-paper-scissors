import useGameStore from "../stores/game.store";
import { AnnounceButton } from "./button-variances";

export default function Announce() {
  const resetGame = useGameStore((state) => state.reset);
  const isWinning = useGameStore((state) => state.win);

  return (
    <div className="grid gap-6 text-center">
      <div className="text-6xl font-bold uppercase text-white">
        You {isWinning ? "win" : "lose"}
      </div>
      <AnnounceButton text="play again" onClick={resetGame} />
    </div>
  );
}
