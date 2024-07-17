import './index.css'

const EmojiCard = props => {
  const {emojiDetails, ClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojiCard = () => {
    ClickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button type="button" className="emoji-btn" onClick={onClickEmojiCard}>
        <img className="emoji-icon" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
