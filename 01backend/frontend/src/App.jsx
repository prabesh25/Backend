import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from 'axios'
import { useEffect } from "react";


function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      console.log("resp:", response.data)
      setJokes(response.data);
    })
    .catch((err) => {
console.log("err:", err)
    })
  }, [])

  return (
    <>
      <h1>Full stack only | Hitesh Playlist</h1>
      <p>JOKES: {jokes.length}</p>

      {
      jokes.map((joke, index) => {
        return(
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <h2>{joke.content}</h2>
        </div>
        )
      })}
    </>
  );
}

export default App;
