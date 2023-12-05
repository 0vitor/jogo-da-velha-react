interface SquareProps {
  value: string;
  onSquareClick: () => void;
}

function Square({ value, onSquareClick }: SquareProps) {
  return <div onClick={onSquareClick} className="square"> {value}</div>;
}

export { Square }
