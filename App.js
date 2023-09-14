import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Hello World";
  const obj= {name: "Hello world object"}
  const data = ['We', 'are', 'united']
  const list = [{name: "Hello world 1"}, {name: "Hello world 2"}, {name: "Hello world 3"}]
  const complex = [{company: 'XYZ', jobs:['Javascript', 'React']}, {company: 'ABC', jobs: ['AngularJs', 'Iconic']}]
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Saad
        </a>
        <p>
          {name}
        </p>
        <p>
          {obj.name}
        </p>
        <p>
          {data.join(" ")}
        </p>
        <ul>
        {list.map(function(item) {
  return(
    <li>{item.name}</li>
  );
})}

        </ul>
        <table border='1px'>
  <tr>
    <th>Company</th>
    <th>Jobs</th>
  </tr>
  {complex.map(function (item) {
    return (
      <tr>
        <td>{item.company}</td>
        <td>{item.jobs.join(', ')}</td>
      </tr>
    );
  })}
</table>

     


      </header>
    </div>
  );
}

export default App;
