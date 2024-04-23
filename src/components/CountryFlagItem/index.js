import './index.css'

const CountryFlagItem = props => {
  const {countryDetails} = props
  const {id, imageUrl, name, isVisited} = countryDetails
  return (
    <li className="country-img-container">
      <img className="country-img" src={imageUrl} alt="dd" />
      <div className="name-btn-container">
        <p className="name">{name}</p>
        <button className="remove-btn" type="button">
          Remove
        </button>
      </div>
    </li>
  )
}

export default CountryFlagItem
