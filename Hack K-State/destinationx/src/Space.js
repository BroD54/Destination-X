import React from 'react'
import {useState, useEffect} from 'react'
import Body from './components/Body.js'
const 
Space = () => {

  const [body, setBody] = useState();
  const[getNew, setGetNew] = useState(false);
  useEffect (() => {
    async function getBodies() {
        let data = await fetch("https://api.le-systeme-solaire.net/rest.php/bodies?data=englishName%2CsemimajorAxis%2Cmoons%2Cmass%2Cdensity%2Cgravity%2CmeanRadius%2CbodyType%2CavgTemp%2CaroundPlanet%2CdiscoveredBy%2CdiscoveryDate");
        data = await data.json();
        data = data.bodies;
        let number = Math.floor(Math.random() * data.length);
        setBody(data[number]);
    }
    getBodies();
  },[getNew])

  const newbody = () =>  {
    setGetNew(!getNew);
  }
  

  return (
    <div className="Space">
        {body != null && <Body body={body} newbody={newbody} />}
    </div>
  )
}

export default 
Space