import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import cardContent from "./cardContent.json";
import "./app.css";

export const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [content, setContent] = useState(cardContent);

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

  useEffect(() => {
    const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);
    setContent(shuffleArray(content));
  });

  return (
    <div className="app-grid">
      <Header currentScore={currentScore} highScore={highScore} />
      {content.map((el) => (
        <Card
          key={el.id}
          handleClick={handleClick}
          id={el.id}
          name={el.name}
          image={el.image}
        />
      ))}
    </div>
  );
};
