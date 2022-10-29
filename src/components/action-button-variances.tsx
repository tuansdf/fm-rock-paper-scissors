import ActionButton from "./ui/action-button";

interface Props {
  onClick?: () => void;
  disabled?: boolean;
}

export function PaperButton({ onClick, disabled }: Props) {
  return (
    <ActionButton
      onClick={onClick}
      disabled={disabled}
      imgAlt="la"
      imgSrc="/icon-paper.svg"
      type="blue"
    />
  );
}
export function RockButton({ onClick, disabled }: Props) {
  return (
    <ActionButton
      onClick={onClick}
      disabled={disabled}
      imgAlt="dam"
      imgSrc="/icon-rock.svg"
      type="red"
    />
  );
}
export function ScissorsButton({ onClick, disabled }: Props) {
  return (
    <ActionButton
      onClick={onClick}
      disabled={disabled}
      imgAlt="keo"
      imgSrc="/icon-scissors.svg"
      type="yellow"
    />
  );
}
export function VacantButton() {
  return (
    <div className="grid aspect-square w-32 place-items-center">
      <div className="aspect-square w-24 rounded-full bg-black"></div>
    </div>
  );
}
