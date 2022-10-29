import { sample } from "lodash-es";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

export enum ActionChoice {
  Rock,
  Paper,
  Scissors,
}

const actions = [ActionChoice.Rock, ActionChoice.Paper, ActionChoice.Scissors];

interface GameState {
  score: number;
  win: boolean;
  end: boolean;
  opponent: ActionChoice | null;
  player: ActionChoice | null;
  playPlayer: (choice: ActionChoice) => void;
  playOpponent: () => void;
  reset: () => void;
  decide: () => void;
}

const useGameStore = create(
  persist(
    devtools<GameState>((set, get) => ({
      score: 0,
      win: false,
      end: false,
      opponent: null,
      player: null,
      playOpponent: () => set({ opponent: sample(actions) }),
      playPlayer: (choice: ActionChoice) => set({ player: choice }),
      reset: () =>
        set({ win: false, end: false, opponent: null, player: null }),
      decide: () => {
        const playerChoice = get().player;
        const opponentChoice = get().opponent;
        const rules = () => {
          if (opponentChoice === ActionChoice.Paper) {
            return playerChoice === ActionChoice.Scissors;
          } else if (opponentChoice === ActionChoice.Scissors) {
            return playerChoice === ActionChoice.Rock;
          } else if (opponentChoice === ActionChoice.Rock) {
            return playerChoice === ActionChoice.Paper;
          }
        };
        const win = rules();
        set({ win, end: true, score: win ? get().score + 1 : get().score });
      },
    })),
    {
      name: "rock-paper-scissors",
    }
  )
);

export default useGameStore;
