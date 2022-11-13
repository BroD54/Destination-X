import React from 'react'
import {Card} from 'react-bootstrap';
const Country = ({country}) => {
    country = {
        "name": country.name.common,
        "currency": (country.currencies == null) ? null : Object.entries(country.currencies).map(curr => curr[1].name),
        "capital": (country.capital == null) ? null : Object.entries(country.capital).map(cap => cap[1]),
        "subregion": country.subregion,
        "languages": (country.languages == null) ? null : Object.entries(country.languages).map(lang => lang[1]),
        "borders": (country.borders == null) ? null : Object.entries(country.borders).map(border => border[1]),
        "area": country.area,
        "population": country.population,
        "flag": country.flags.png
      }
  return (
    <div className="country">
        <Card style={{ width: '18rem', color: "black" }} className="countryCard">
            <Card.Img variant="top" src={country.flag} style={{border: "8px solid #212529"}} />
            <Card.Body>
              <Card.Title>{country.name}</Card.Title>
              <Card.Text>
                Capital: {country.capital}<br></br>
                Currency: {(country.currency == null) ? "None" : ((country.currency.length > 1) ?  country.currency.join(", ") : country.currency)}<br></br>
                Subregion: {country.subregion}<br></br>
                Languages: {(country.languages == null) ? "None" : ((country.languages.length > 1) ?  country.languages.join(", ") : country.languages)}<br></br>
                Borders: {(country.borders == null) ? "None" : ((country.borders.length > 1) ?  country.borders.join(", ") : country.borders)}<br></br>
                Area: {country.area.toLocaleString('en-US')} Km sq.<br></br>
                Population: {country.population.toLocaleString('en-US')}<br></br>
              </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Country