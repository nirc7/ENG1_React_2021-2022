import React from 'react';
import FCPersonsData from './FCPersonsData';

export default function FCPersonsList(props) {

  const getId = (pId) => {
    props.sendId(pId);
  }

  let personsStr = props.persons.map(
    per => <FCPersonsData key={per.id}
      id={per.id}
      name={per.name}
      sendId={getId}
    />
  );

  return (
    <div>
      {personsStr}
    </div>
  )
}
