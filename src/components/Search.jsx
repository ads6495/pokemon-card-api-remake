import React, { useState } from 'react'
import CardData from './CardData'
import axios from 'axios'

const Search = ({ searchCards }) => {

  const getCardApi = async () => {
    const resp = await axios.get(
      'https://api.pokemontcg.io/v1/cards?name=bayleef'
    )
    setCard(resp.data.cards)


  }
  const [card, setCard] = useState([])
  const [text, setText] = useState('')
  const onSubmit = e => {
    e.preventDefault();
    searchCards(getCardApi())
    setText('')
  }

  const onChange = e => setText(e.target.value)

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text"
          placeholder='search cards..'
          value={text}
          onChange={onChange}
        />
        <input type="submit"
          value='search'
        />
      </form>
    </div>
  )
}
export default Search