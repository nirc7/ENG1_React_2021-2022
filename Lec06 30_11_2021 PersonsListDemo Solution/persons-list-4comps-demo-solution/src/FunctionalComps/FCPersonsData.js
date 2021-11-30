import React from 'react'

export default function FCPersonsData(props) {
  return (
    <div>
      <p>id: {props.id}, name: {props.name}
        <button onClick={ ()=>props.sendId(props.id) }>X</button></p>
    </div>
  )
}
