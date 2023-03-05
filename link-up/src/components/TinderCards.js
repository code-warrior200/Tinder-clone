import React, {useState} from 'react'

const TinderCards = () => {
    const [people, setPeople] = useState([
        {
            name: 'steve jobs',
            url: ''
        },
        {
            name: 'mark zuckerberg',
            url: ''
        },

    ]);
    //const poeple = [];

  return (
    <div>
        <h1>TinderCards</h1>
    </div>
  )
}

export default TinderCards;