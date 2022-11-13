import React from 'react';
import {useState, useEffect} from 'react';

const Learn = () => {
  let [countries, setCountries] = useState();

  useEffect(() => {
    async function getCountries() {
        let resp = await fetch("https://restcountries.com/v3.1/all");
        resp = await resp.json();
        setCountries(resp);
    }
    getCountries();
  }, [])
  
  return (
    <div>
        {countries != null ? (
            <h1>{countries[1].name.common}</h1>
        ): "Loading"}
    </div>
  )
}

export default Learn