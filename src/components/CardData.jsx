import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { setState } from 'expect/build/jestMatchersObject';
import Search from './Search'


const CardData = () => {
  const [card, setCard] = useState([])
  const [cardName, setCardName] = useState('')

  const getCardApi = async () => {
    const resp = await axios.get(
      'https://api.pokemontcg.io/v1/cards?name=bayleef'
    )
    setCard(resp.data.cards)


  }

  useEffect(() => {
    getCardApi()
  });



  return (
    <div>
      <Search />
      <ul>
        {card.map(results => {
          return (
            <li key={results.id}>
              <section>
                <p>{results.name}</p>
                <p>{results.nationalPokedexNumber}</p>
                <p>{results.type}</p>
              </section>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default CardData;
