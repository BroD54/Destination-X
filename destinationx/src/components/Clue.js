import {useState, useEffect} from 'react'
import React from 'react'
import {Button} from 'react-bootstrap';
const Clue = ({restart, setRestart, type, ans, clueUse, isDisabled}) => {
  if(ans.length > 1 && Array.isArray(ans)){
    ans = ans.join(", ");
  }
  const [show, setShow] = useState(false);

  useEffect(() => {
    if(restart){
      setShow(false);
    }
    setRestart(false);
  }, [restart])

  const usedClue = () => {
    setShow(true);
    clueUse(type);
  }

  return (
    <div>
        <Button variant="light" key={type} onClick={usedClue} style={{margin: '0.25rem', width: "50%"}} disabled={show || !isDisabled}>
          {type}{show ? ": " : ""} {show && ((type === "flag" || type === "coatofarms") ? <img src={ans} alt="flag" width="50%"></img>: `${ans}`)}
        </Button>
    </div>
  )
}

export default Clue