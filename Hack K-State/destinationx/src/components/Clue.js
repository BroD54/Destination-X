import {useState} from 'react'
import React from 'react'
import {Button} from 'react-bootstrap';
const Clue = ({type, ans, clueUse, isDisabled}) => {
  if(ans.length > 1 && Array.isArray(ans)){
    ans = ans.join(", ");
  }
  const [show, setShow] = useState(false);
  const usedClue = () => {
    setShow(true);
    clueUse(type);
  }

  return (
    <div>
        <Button key={type} onClick={usedClue} style={{margin: '0.25rem'}} disabled={show || !isDisabled}>{type}{show && ((type === "flag" || type === "coatofarms") ? <img src={ans} alt="flag" width="200px"></img>: `: ${ans}`)}</Button>
    </div>
  )
}

export default Clue