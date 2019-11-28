import React from 'react';
import './App.css';

function submitForm(e){
  e.preventDefault()
  console.log('hello')
}

function App() {
  return (
    <div className="App">
      <form onSubmit={(e)=>submitForm(e)}>
      <p>Frstname: <input type="text"/> </p>
      <p>Lastname: <input type="text"/> </p>
      {/* <button type='submit'>Submit</button> */}
      </form>
    </div>
  );
}

export default App;

