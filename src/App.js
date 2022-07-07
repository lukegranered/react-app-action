import './App.css';

const Person = (props) => {
  return(
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {
  const name = 'John';
  const isNameShowing = false;
  return (
    <div className="App">
      <Person name='John' lastName='Doe' age={25}/>
      <Person name='Jane' lastName='Doe' age={24}/>
      <Person />
      <Person />
      <Person />
      <Person />
    </div>
  );
}

export default App;
