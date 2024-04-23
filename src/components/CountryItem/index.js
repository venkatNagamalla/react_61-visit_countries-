import './index.css'

const CountryItem = props => {
  const {countryDetails, getCountryId} = props
  const {id, isVisited, name} = countryDetails
  return (
    <li className="list">
      <p className="name">{name}</p>
      {isVisited ? (
        <p className="visited-text">Visited</p>
      ) : (
        <button
          onClick={() => getCountryId(id)}
          className="visit-btn"
          type="button"
        >
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryItem
