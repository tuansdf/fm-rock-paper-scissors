interface Props {
  text: string;
}

export default function ActionLabel({ text }: Props) {
  return (
    <div className="text-sm font-bold uppercase tracking-wide text-white">
      {text}
    </div>
  );
}
