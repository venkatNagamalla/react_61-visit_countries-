import './index.css'

const CountryFlagItem = props => {
  const {countryDetails, removeCountry} = props
  const {id, imageUrl, name} = countryDetails
  return (
    <li className="country-img-container">
      <img className="country-img" src={imageUrl} alt="thumbnail" />
      <div className="name-btn-container">
        <p className="name">{name}</p>
        <button
          onClick={() => removeCountry(id)}
          className="remove-btn"
          type="button"
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default CountryFlagItem
