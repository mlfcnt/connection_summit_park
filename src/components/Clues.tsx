import { clues } from "../cards";

export const Clues = ({ amountToShow }: { amountToShow: number }) => {
  return (
    <div>
      <h2>Clues</h2>
      <>
        {clues.slice(0, amountToShow).map((clue) => (
          <p key={clue}>
            <div>{clue}</div>
          </p>
        ))}
      </>
    </div>
  );
};
