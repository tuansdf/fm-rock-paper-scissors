import useGameStore from "../stores/game.store";

export default function ScoreBoard() {
  const score = useGameStore((state) => state.score);

  return (
    <div className="flex w-full items-center justify-between rounded-xl border-2 border-header-outline p-4 pl-6">
      <img src="/logo.svg" alt="logo" className="h-16" />
      <div className="flex aspect-square w-24 flex-col items-center justify-center rounded-md bg-white">
        <span className="text-xs uppercase tracking-widest text-score-text">
          score
        </span>
        <span className="text-5xl font-bold">{score}</span>
      </div>
    </div>
  );
}
