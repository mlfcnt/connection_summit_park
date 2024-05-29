import { useMemo, useState } from "react";
import "./App.css";
import { Card, cards } from "./cards";
import { Clues } from "./components/Clues";

const CARD_WIDTH = 100;

function App() {
  const [selectedCards, setSelectedCards] = useState<
    (Card & { completed: boolean })[]
  >([]);

  const [completedCards, setCompletedCards] = useState<
    (Card & { completed: true })[]
  >([]);

  const [lives, setLives] = useState(4);

  const cardsInRandomOrder = useMemo(
    () => cards.sort(() => Math.random() - 0.5),
    []
  );

  const checkIfGroupIsComplete = () => {
    if (selectedCards.length !== 4) return;
    return (
      selectedCards[0].groupId === selectedCards[1].groupId &&
      selectedCards[0].groupId === selectedCards[2].groupId &&
      selectedCards[0].groupId === selectedCards[3].groupId
    );
  };

  return (
    <>
      <div className="container">
        {cardsInRandomOrder.map((card) => (
          <div
            key={card.id}
            style={{
              width: `${CARD_WIDTH}px`,
              height: `${CARD_WIDTH}px`,
              border: selectedCards.some((x) => x.id === card.id)
                ? "4px solid lightblue"
                : "2px solid black",
              cursor: completedCards.some((x) => x.id === card.id)
                ? "not-allowed"
                : "pointer",
              backgroundColor: completedCards.some((x) => x.id === card.id)
                ? "black"
                : "initial",
            }}
            onClick={() => {
              const cardIsCompleted = completedCards.some(
                (x) => x.id === card.id
              );
              if (
                cardIsCompleted ||
                (selectedCards.length === 4 &&
                  !selectedCards.some((x) => x.id === card.id))
              )
                return;

              const cardWasAlreadySelected = selectedCards.some(
                (x) => x.id === card.id
              );
              cardWasAlreadySelected
                ? setSelectedCards((selectedCards) =>
                    selectedCards.filter((x) => x.id !== card.id)
                  )
                : setSelectedCards((x) => [
                    ...x,
                    { ...card, completed: false },
                  ]);
            }}
          >
            <div>{card.front}</div>
          </div>
        ))}
      </div>
      <button
        style={{ marginTop: "30px" }}
        disabled={selectedCards.length !== 4 || !lives}
        onClick={() => {
          const groupIsComplete = checkIfGroupIsComplete();
          if (groupIsComplete) {
            const newCompletedCards = selectedCards.map((card) => ({
              ...card,
              completed: true,
            }));
            //@ts-expect-error TODO
            setCompletedCards((completedCards) => [
              ...completedCards,
              ...newCompletedCards,
            ]);
            setSelectedCards([]);
          } else {
            setLives(lives - 1);
          }
        }}
      >
        Guess
      </button>
      <div style={{ marginTop: "30px" }}>
        <span>{"❤️".repeat(lives)}</span>
        <span>{"🖤".repeat(4 - lives)}</span>
      </div>
      <Clues amountToShow={completedCards.length / 4} />
    </>
  );
}

export default App;
