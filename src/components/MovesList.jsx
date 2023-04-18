import React from 'react'

export default function MovesList({ title, moves }) {
  console.log('moves', moves);
  return (
    <>
      <h2>{title}</h2>
      <section className="move-list flex">
        {moves.map((move, idx) => {
          return (
            <div key={idx}>
              <p><span>At:</span> {new Date(move.createdAt).toLocaleString()}</p>
              <p><span>Amount:</span> {move.amount}$</p>
              <p><span>Transferd to:</span> {move.to}</p>
            </div>
          )
        })}
      </section>
    </>
  )
}
