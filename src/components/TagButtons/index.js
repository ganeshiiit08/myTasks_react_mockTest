import './index.css'

const TagButtons = props => {
  const {item, tagButtonId, isActive} = props
  const {displayText} = item
  const btn = isActive ? 'styled' : 'button-v'

  const onClickButton = () => {
    tagButtonId(displayText)
  }

  return (
    <li className="button">
      <button type="button" className={btn} onClick={onClickButton}>
        {displayText}
      </button>
    </li>
  )
}

export default TagButtons
