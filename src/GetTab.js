import './index.css'

const GetTab = props => {
  const {item, onChangeTab, isActive} = props
  const {displayText, tabId} = item
  const changeTab = () => {
    onChangeTab(tabId)
  }
  const result = isActive ? 'button1' : 'button'
  return (
    <li className="list-item">
      <button type="button" className={result} onClick={changeTab}>
        {displayText}
      </button>
    </li>
  )
}
export default GetTab
