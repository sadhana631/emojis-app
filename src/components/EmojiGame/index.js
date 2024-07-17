import {Component} from 'react'

import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    isGameInProgress: true,
    topScore: 0,
  }

  resetGame = () => {
    this.setState({clickedEmojisList: [], isGameInProgress: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isWon = clickedEmojisList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={clickedEmojisList.length}
      />
    )    
  }  

  finishedGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }

    this.setState({topScore: newTopScore, isGameInProgress: false})
  }  

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clicledEmojisList} = this.state
    const isEmojiPresent = clicledEmojisList.length

    if (isEmojiPresent) {
      this.finishedGameAndSetTopScore(clicledEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishedGameAndSetTopScore(emojisList.length)
      }
      this.setState(previousState => ({
        clicledEmojisList: [...previousState.clickedEmojisList, id],
      }))  
    }

    getShuffledEmojisList = () => {
      const {emojisList} = this.props

      return emojisList.sort(() => Math.random() - 0.5)
    }

    renderEmojisList = () => {
      const getShuffledEmojisList = this.getShuffledEmojisList()

      return (
        <ul className="emojis-list-container">
          {ShuffledEmojisList.map(emojisObject => (
            <EmojiCard
              key={emojiObject.id}
              emojiDetails={emojiObject}
              clickEmoji={this.clickEmoji}
            />
          ))}    
        </ul>
      )  
    }

    render() {
      const {clickedEmojisList, isGameInProgress, topScore} = this.state

      return (
        <div className="app-container">
          <NavBar
            currentScore={clickedEmojisList.length}
            isGameInProgress={isGameInProgress}
            topScore={topScore}
          />
          <div className="emoji-game-body">
            {isGameInProgress ? this.renderEmojisList() = this.renderScoreCard()}
          </div>  
        </div>
      )     
   }
}

export default EmojiGame