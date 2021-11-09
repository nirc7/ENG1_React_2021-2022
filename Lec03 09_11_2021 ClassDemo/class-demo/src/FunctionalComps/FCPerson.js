
export default function FCPerson(props) {

  let num = 17;
  num++;
  console.log(num);
  //props.id = num;

  function btnAdd() {
    num++;
    num += props.id;
    console.log(num);
  }
  
  const chgTxt=(e)=> {
    console.log(e.target.value);
  }

  return (
    <div style={{ border: 'solid green 2px', margin: 15, padding: 10 }}>
      <div>FCPerson</div>
      <div>id={props.id} name={props.name}</div>
      <div>num={num}</div>
      <button onClick={btnAdd} >add One</button> <br /> 
      <input type="text" onChange={chgTxt} />
    </div>
  );
}