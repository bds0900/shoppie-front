import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Results from './Components/Results';
import Search from './Components/Search';
import { SearchType,ResponseType } from './Components/Interfaces';
import Nominations from './Components/Nominations';
import ReactDOM from 'react-dom';


const API = 'http://www.omdbapi.com/?apikey=72a5618d&s='


function App() {
  const [tag,setTag]=useState("");
  const [fetchedData,setFetchedData]=useState<SearchType[]>();
  const [nomination,setNomination]=useState<SearchType[]>();
  const [banner,setBanner]=useState<boolean>(false);

  const handleSearch=(event: React.ChangeEvent<HTMLInputElement>)=>{
      setTag(event.target.value)
      console.log(event.target.value);
      axios.get<ResponseType>(API+event.target.value)
        .then(result =>{
            if(result.data.Response==="True")
            {
              console.log(result.data)
              setFetchedData(result.data.Search)
            } else{
              setFetchedData(undefined)
            }
            
        })
        .catch(error => console.log(error));
  }

  const addNomination=(id:string)=>{
    if(nomination!==undefined){
      fetchedData?.map(data=>{
        if(data.imdbID===id){
          let arr=[...nomination];
          arr.push(data)
          setNomination(arr);
        }
      })
    }else{
      fetchedData?.map(data=>{
        if(data.imdbID===id){
          setNomination([data])
        }
      })
    }

    const button = document.getElementById(id)
    if(button!==null)
    {
        (button as HTMLButtonElement).disabled = true;
    }
    if(nomination?.length===4){
      addBanner()
    }

  }
  
  const removeNomination=(id:string)=>{
    if(nomination!==undefined)
    {
      let arr=nomination.filter(data=>data.imdbID!==id)
      console.log(arr);
      if(arr.length==0)
      {
        setNomination(undefined)
      }else{
        setNomination(arr);
      }
    }

    const button = document.getElementById(id)
    if(button!==null)
    {
        (button as HTMLButtonElement).disabled = false;
    }

  }
  
  const addBanner=()=>{
    setBanner(true)
    setTimeout(() => {
      setBanner(false)
    }, 3000);
  }


  return (
    <div className="App">
      <header className="App-header">
        The Shoppies
      </header>
      <Search handleSearch={handleSearch}/>

      {
        fetchedData===undefined?
        null:
        <Results 
          searches={fetchedData} 
          add={addNomination}
          tag={tag}
        />
      }
      {
        nomination===undefined?
        null:
        <Nominations 
          nominations={nomination} 
          remove={removeNomination}
        />
      }

      
        <div className={`banner ${banner?"banner--hidden":""}`}>
          You got 5 nominations
        </div>
    </div>
  );
}

export default App;
