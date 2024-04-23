import {useState} from 'react'
import CountryItem from '../CountryItem'
import CountryFlagItem from '../CountryFlagItem'
import './index.css'

const CountriesContainer = props => {
  const {initialCountriesList} = props
  const [countriesList, setCountriesList] = useState(initialCountriesList)

  const getCountryId = countryId => {
    const country = countriesList.map(eachCountry => {
      if (eachCountry.id === countryId) {
        const updatedCountry = {
          ...eachCountry,
          isVisited: !eachCountry.isVisited,
        }
        return updatedCountry
      }
      return eachCountry
    })
    setCountriesList(country)
  }

  const removeCountry = countryId => {
    getCountryId(countryId)
  }

  const renderCountriesList = () => (
    <ul className="list-container">
      {countriesList.map(eachCountry => (
        <CountryItem
          getCountryId={getCountryId}
          key={eachCountry.id}
          countryDetails={eachCountry}
        />
      ))}
    </ul>
  )

  const renderCountries = () => (
    <ul className="visited-countries-container">
      {countriesList.map(
        eachCountry =>
          eachCountry.isVisited && (
            <CountryFlagItem
              key={eachCountry.id}
              countryDetails={eachCountry}
              removeCountry={removeCountry}
            />
          ),
      )}
    </ul>
  )

  const renderVisitedCountries = () => {
    const updatedList = countriesList.filter(
      eachCountry => eachCountry.isVisited === true,
    )

    return updatedList.length === 0 ? (
      <div className="mess-container">
        <p className="mess">No Countries Visited Yet!</p>
      </div>
    ) : (
      renderCountries()
    )
  }

  return (
    <div className="bg-container">
      <h1 className="countries-heading">Countries</h1>
      {renderCountriesList()}
      <h1 className="visited-countries-heading">Visited Countries</h1>
      {renderVisitedCountries()}
    </div>
  )
}

export default CountriesContainer
