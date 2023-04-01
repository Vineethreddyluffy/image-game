import './index.css'

const GetItem = props => {
  const {items, onClickRandom} = props
  const {thumbnailUrl, id} = items
  const changeImage = () => {
    onClickRandom(id)
  }
  return (
    <li className="listOf">
      <button type="button" className="img-btn" onClick={changeImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumb-img" />
      </button>
    </li>
  )
}
export default GetItem
