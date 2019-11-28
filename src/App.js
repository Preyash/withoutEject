import React, {useState} from 'react';
import './App.css';
import DataContext from './store'

console.log(DataContext._currentValue)

function submitForm(e){
  e.preventDefault()
  DataContext._currentValue.addReview({
    id: new Date().valueOf(),
    firstname: document.getElementById('fn').value, 
    lastname: document.getElementById('ln').value
  })
}
function App() {
  const [state, setstate] = useState(DataContext._currentValue)
  return (
    <div className="App">
      <form onSubmit={(e)=>submitForm(e)}>
        <p>Frstname: <input id='fn' type="text"/> </p>
        <p>Lastname: <input id='ln' type="text"/> </p>
        <button type='submit'>Submit</button>
      </form>
      <dl>
        {
          DataContext._currentValue.reviewList.map((i,j)=>
            <dt key={j}>{i.firstname} {i.lastname}</dt>
            )
        }
      </dl>
      <p>Total: {DataContext._currentValue.reviewCount}</p>
    </div>
  );
}

export default App;

