export const Header = ({ currentScore, highScore }) => (
  <div className="header">
    <div className="game-title">Memory Card</div>
    <div className="current-score">Current Score: {currentScore}</div>
    <div className="best-score">Best Score: {highScore}</div>
    <div className="explanation-txt">
      Get points for choosing an animal, but don't click on the same animal more
      than once!
    </div>
  </div>
);
