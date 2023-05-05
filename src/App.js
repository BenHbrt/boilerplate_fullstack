import './App.scss';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { backendBase } from './env';

function App() {

  const [data, setData] = useState([])

  const loadData = async () => {
    const APIData = await axios.get(`${backendBase}/api/demoNames`)
    setData(APIData.data.data)
  }

  useEffect(() => {
    loadData()
  })

  return (
    <div className="App">
      <h1>Fullstack Boilerplate</h1>
      <p><strong>Demo DB data:</strong></p>
      {
        data ? 
        <ul>
          {
            data.map((item) => {
              return <li>ID: {item.id}, Name: {item.name}</li>
            })
          }
        </ul>
        :
        null
      }
    </div>
  );
}

export default App;