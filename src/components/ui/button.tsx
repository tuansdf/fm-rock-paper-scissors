import clsx from "clsx";

interface Props {
  text: string;
  size: "normal" | "big";
  fill: boolean;
  onClick: () => void;
}

export default function Button({ text, size, fill, onClick }: Props) {
  return (
    <button
      className={clsx(
        "rounded-md border-2 border-white font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90",
        {
          "px-16 py-4": size === "big",
          "px-8 py-2": size === "normal",
          "bg-white text-black": fill,
        }
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
