import React from 'react'

function PokemonList({ pokemon }) {
  return (
    <>
      {pokemon.map(p => (
        <div key={p}>{p}</div>
      ))}
    </>
  )
}

export default PokemonList