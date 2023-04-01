import {Component} from 'react'

import GetTab from './GetTab'
import GetItem from './GetItem'

import GetNav from './GetNav'

import './index.css'

class GetMatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      activeTab: 'FRUIT',
      listOf: props.imagesList,
      tabsOf: props.tabsList,
      seconds: 60,
      url: 'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
      game: false,
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000)
  }

  onChangeList = () => {
    const {listOf, activeTab} = this.state
    const newList = listOf.filter(each => each.category === activeTab)
    return newList
  }

  onChangeTab = props => {
    this.setState({activeTab: props})
  }

  onClickRandom = props => {
    const {imagesList} = this.props
    const {listOf, url} = this.state
    const rand = Math.random() * imagesList.length
    const num = Math.floor(rand)
    const itemOf = imagesList[num]
    const newArr = listOf.filter(each => each.id === props)
    const newItem = newArr[0].imageUrl
    if (newItem === url) {
      this.setState(prevState => ({
        count: prevState.count + 1,
        url: itemOf.imageUrl,
      }))
    } else {
      clearInterval(this.intervalId)
      this.setState({game: true})
    }
  }

  tick = () => {
    const {seconds} = this.state
    if (parseInt(seconds) > 0) {
      this.setState(prevState => ({seconds: prevState.seconds - 1}))
    } else {
      this.setState({game: true})
      clearInterval(this.intervalId)
    }
  }

  onReset = () => {
    this.intervalId = setInterval(this.tick, 1000)
    this.setState({seconds: 60, count: 0, game: false})
  }

  render() {
    const {tabsOf, activeTab, url, count, seconds, game} = this.state
    const imgList = this.onChangeList()
    const secondsOf = seconds > 9 ? seconds : `0${seconds}`
    return (
      <div>
        <GetNav count={count} secondsOf={secondsOf} />
        <div className="lower-cont">
          {game ? (
            <div className="bg-image">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
                alt="trophy"
                className="trophy"
              />
              <p className="win-para">Your Score</p>
              <p className="win-para1">{count}</p>
              <button type="button" className="play-btn" onClick={this.onReset}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
                  alt="reset"
                />
                Play Again
              </button>
            </div>
          ) : (
            <div className="lower-cont">
              <img src={url} alt="match" className="top-image" />
              <ul className="card-cont">
                {tabsOf.map(each => (
                  <GetTab
                    key={each.tabId}
                    item={each}
                    onChangeTab={this.onChangeTab}
                    isActive={activeTab === each.tabId}
                  />
                ))}
              </ul>
              <ul className="item-cont">
                {imgList.map(each => (
                  <GetItem
                    key={each.id}
                    items={each}
                    onClickRandom={this.onClickRandom}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default GetMatch
