import './index.css'

const GetNav = props => {
  const {count, secondsOf} = props

  return (
    <ul className="nav-cont">
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="main-image"
        />
      </li>
      <li className="score-cont">
        <p className="score">
          Score:<span className="span"> {count}</span>
        </p>
        <li className="timer-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="image"
          />
          <p className="timer">{secondsOf} secs</p>
        </li>
      </li>
    </ul>
  )
}
export default GetNav
