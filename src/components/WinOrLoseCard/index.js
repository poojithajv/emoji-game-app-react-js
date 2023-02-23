// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props
  const imgUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const onClickPlayAgainButton = () => {
    onClickPlayAgain(score)
  }

  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="score-card-container">
      <div className="score-details">
        <h1 className="score-details-heading">{gameStatus}</h1>
        <p className="score-label">{scoreLabel}</p>
        <p className="score">{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgainButton}
        >
          Play Again
        </button>
      </div>
      <div className="image-container">
        <img src={imgUrl} alt="win or lose" className="image" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
