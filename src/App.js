import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from './axios'

function App() {
  const [test1, setTest] = useState({});
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    axios
            .get(`/test`, {})
            .then(res => {
                const data = res.data
                setTest({data:data.data})
            })
            .catch((error) => {
                console.log(error)
            })
  });
  const handleSubmit = (evt) => {
    evt.preventDefault();
    let data = {name:name,description:desc}
    axios
    .post(`/test`, data)
    .then(res => {
        console.log(res);
        alert(`Submited Name ${name}, Description ${desc}`)
    })
    .catch((error) => {
        console.log(error)
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name"  
          value={name}
          onChange={e => setName(e.target.value)} 
          placeholder="name" id=""/>
          
          &nbsp; &nbsp; &nbsp;
          <input type="text" name="description" 
          value={desc}
          onChange={e => setDesc(e.target.value)} 
          placeholder="description" id=""/>

          &nbsp; &nbsp; &nbsp;
          <input type="submit" value="Submit"/>
        </form>
        <br/>
        <br/>
        <br/>
          Learn React
        <table>
        <tr>
          <th>name</th>
          <th>description</th>
        </tr>
        {(test1.data && test1.data.length !=0)?test1.data.map((hello)=>{
          return (
            <tr>
            <td>{hello.name?hello.name:"Nan"}</td>
            <td>{hello.description?hello.description:"Nwn"}</td>
            </tr>
          )
         }):""}
        </table>
      
      </header>
    </div>
  );
}

export default App;
