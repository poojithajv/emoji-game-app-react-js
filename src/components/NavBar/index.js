// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, currentScore, isGameInProgress} = props

  return (
    <nav className="navbar-container">
      <div className="logo-score-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="logo-image"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="score-container">
            <p className="score">Score: {currentScore}</p>
            <p className="top-score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar
