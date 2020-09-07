import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Results from './Components/Results';
import Search from './Components/Search';
import { SearchType,ResponseType } from './Components/Interfaces';
import Nominations from './Components/Nominations';
import { useCookies } from "react-cookie";
import Share from './Components/Share';


const API = 'https://www.omdbapi.com/?apikey=72a5618d&s='


function App() {
  const [tag,setTag]=useState("");
  const [fetchedData,setFetchedData]=useState<SearchType[]>();
  const [nomination,setNomination]=useState<SearchType[]>();
  const [banner,setBanner]=useState<boolean>(false);
  const [cookies, setCookie] = useCookies(["user"]);
  useEffect(()=>{
    updateButton()
    handleCookie()
    if(nomination?.length===5){
      addBanner()
    }
  },[nomination,fetchedData])

  useEffect(()=>{
    if(cookies.user!=="undefined"){
      setNomination(cookies.user)
    }

  },[])


  const updateButton=()=>{
    fetchedData?.map(item=>{
      const button = document.getElementById(item.imdbID)
      if(button!==null)
      {
          (button as HTMLButtonElement).disabled = false;
      }

    })
    nomination?.map(item=>{
      const button = document.getElementById(item.imdbID)
      if(button!==null)
      {
          (button as HTMLButtonElement).disabled = true;
      }

    })
  }
  
  const handleCookie=()=>{

    setCookie("user", nomination, {
      path: "/"
    });
  }

  const handleSearch=(event: React.ChangeEvent<HTMLInputElement>)=>{
      setTag(event.target.value)
      axios.get<ResponseType>(API+event.target.value)
        .then(result =>{
            if(result.data.Response==="True")
            {
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
  }
  
  const removeNomination=(id:string)=>{
    if(nomination!==undefined)
    {
      let arr=nomination.filter(data=>data.imdbID!==id)

      if(arr.length===0)
      {
        setNomination(undefined)
      }else{
        setNomination(arr);
      }
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
      {
        fetchedData===undefined?
        null:
        <Share/>
      }
      
      
      <div className={`banner ${banner?"banner--hidden":""}`}>
        You got 5 nominations
      </div>
    </div>
  );
}

export default App;
