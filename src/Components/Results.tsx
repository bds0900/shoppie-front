import React, { ReactElement, useState } from 'react'
import Result from './Result'
import { SearchType } from './Interfaces'
import Search from './Search'

interface Props {
    searches:SearchType[]
    add:any
}


export default function Results(props:Props): ReactElement {
    const add=(id:string)=>{
        props.add(id)
        
    }
    return (
        <div>
        {
            props.searches&&
            props.searches.map(search=>(
                <li key={search.imdbID}>
                    <Result search={search}/>
                    <button 
                        id={search.imdbID} 
                        onClick={()=>(add(search.imdbID))}>
                        Nominate
                    </button>
                </li>
            ))
        }
        </div>
    )
}
