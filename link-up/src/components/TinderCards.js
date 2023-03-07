import React, { useState} from 'react';
import TinderCard from "react-tinder-card";
import "../TinderCards.css";
//import database from './firebase';

const TinderCards = () => {
    const [people, setPeople] = useState([
        {
            name: "steve jobs",
            url: "https://img.etimg.com/thumb/msid-18523710,width-1200,height-900,imgsize-41755,overlay-ettech/photo.jpg"
        },
        {
            name: "mark zuckerberg",
            url: "https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg"
        }
    ]);

    // useEffect(()=> {

    //     database.collection('people').onSnapshot(snapshot => (
    //         setPeople(snapshot.docs.map(doc => doc.data)) 
    //     ))
    // }, []);

    //setPeople([...people, 'sonny','qazi'])

  return (
    <div>
        <div className='tinderCards__cardContainer'>
            {people.map(person =>(
                <TinderCard 
                    className='swipe'
                    key={person.name}
                    preventSwipe={['up','down']}
                    >
                    <div
                    style={{ backgroundImage: `url(${person.url})` }} 
                    className='card'>
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    </div>
  )
}

export default TinderCards;