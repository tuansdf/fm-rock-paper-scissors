import Button from "./ui/button";

interface Props {
  text: string;
  onClick: () => void;
}

export function AnnounceButton({ text, onClick }: Props) {
  return <Button text={text} fill size="big" onClick={onClick} />;
}

export function InfoButton({ text, onClick }: Props) {
  return <Button text={text} fill={false} size="normal" onClick={onClick} />;
}
