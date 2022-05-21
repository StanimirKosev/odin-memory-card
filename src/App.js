import React, { useState } from "react";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import content from "./cardContent.json";

export const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleClick = (id) => {
    content.forEach((el) => {
      if (id === el.id && el.clicked === false) {
        el.clicked = true;
        setCurrentScore(currentScore + 1);
      } else if (id === el.id && el.clicked === true) {
        if (currentScore > highScore) {
          setHighScore(currentScore);
        }
        setCurrentScore(0);
        content.forEach((el) => (el.clicked = false));
      }
    });
  };

  return (
    <div>
      <Header currentScore={currentScore} highScore={highScore} />
      {content.map((el) => (
        <Card key={el.id} handleClick={handleClick} id={el.id} />
      ))}
    </div>
  );
};
