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
    console.log(countryId)
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

  const renderVisitedCountries = () => (
    <ul className="visited-countries-container">
      {countriesList.map(
        eachCountry =>
          eachCountry.isVisited && (
            <li>
              <CountryFlagItem
                key={eachCountry.id}
                countryDetails={eachCountry}
              />
            </li>
          ),
      )}
    </ul>
  )

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
