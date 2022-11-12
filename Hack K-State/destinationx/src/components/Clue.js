import {useState, useEffect} from 'react'
import React from 'react'

const Clue = ({type, ans}) => {
  if(ans.length > 1 && Array.isArray(ans)){
    ans = ans.join(", ");
  }
  const [show, setShow] = useState(false);
  const usedClue = () => {
    setShow(true);
  }

  return (
    <div>
        <button key={type} onClick={usedClue}>{type}{show && ((type === "flag" || type === "coatofarms") ? <img src={ans} alt="flag" width="200px"></img>: `: ${ans}`)}</button>
    </div>
  )
}

export default Clue