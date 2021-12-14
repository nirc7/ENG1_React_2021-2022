import React, { useEffect, useState } from 'react';

export default function FCHooks() {
  const [txtName, setTxtName] = useState('...');
  const [count, setCount] = useState(0);

  const btnAvi = () => {
    setTxtName('avi');
  }

  useEffect(() => {
    console.log('effect txtname=' , txtName);
  }, [txtName])

  const btnCount = () => {
    setCount(prevC=> prevC+1);
  }

  return (
    <div>
      name={txtName} <br />
      <button onClick={btnAvi}   >name will be AVI</button> <br />
      count= {count} <br />
      <button onClick={btnCount}   >count+1</button> <br />
    </div>
  )
}
