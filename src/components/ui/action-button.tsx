import clsx from "clsx";

interface Props {
  imgSrc: string;
  imgAlt: string;
  type: "red" | "yellow" | "blue";
  disabled?: boolean;
  onClick?: () => void;
}

export default function ActionButton({
  imgSrc,
  imgAlt,
  type,
  disabled,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "group relative grid aspect-square w-32 place-items-center rounded-full bg-black p-4",
        {
          "bg-scissors": type === "yellow",
          "bg-rock": type === "red",
          "bg-paper": type === "blue",
        }
      )}
    >
      <div
        className={clsx(
          "absolute h-full w-full scale-0 cursor-pointer rounded-full bg-white opacity-10 transition-transform",
          { "group-hover:scale-150": !disabled }
        )}
      ></div>

      <div className="grid h-full w-full place-items-center rounded-full bg-white">
        <img src={imgSrc} alt={imgAlt} />
      </div>
    </button>
  );
}
