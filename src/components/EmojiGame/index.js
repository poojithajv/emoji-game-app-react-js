/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    topScore: 0,
    isGameInProgress: true,
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newScore = topScore
    if (currentScore >= topScore) {
      newScore = currentScore
    }
    this.setState({topScore: newScore, isGameInProgress: false})
  }

  onClickEmojiCard = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(clickedEmojisLength)
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()

    return (
      <ul className="list-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            clickEmoji={this.onClickEmojiCard}
          />
        ))}
      </ul>
    )
  }

  resetGame = score => {
    const {topScore} = this.state
    let newScore = topScore

    if (score >= topScore) {
      newScore = score
    }
    this.setState({
      topScore: newScore,
      isGameInProgress: true,
      clickedEmojisList: [],
    })
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isWon = clickedEmojisList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clickedEmojisList.length}
        onClickPlayAgain={this.resetGame}
      />
    )
  }

  render() {
    const {topScore, clickedEmojisList, isGameInProgress} = this.state
    return (
      <div className="app-container">
        <NavBar
          topScore={topScore}
          currentScore={clickedEmojisList.length}
          isGameInProgress={isGameInProgress}
        />
        <div className="emojis-container">
          {isGameInProgress ? this.renderEmojisList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
