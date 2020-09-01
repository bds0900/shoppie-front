import React, { ReactElement, useState } from 'react'
import Result from './Result'
import { SearchType } from './Interfaces'
import Search from './Search'

interface Props {
    searches:SearchType[]
    add:any
    tag:string
}


export default function Results(props:Props): ReactElement {
    const add=(id:string)=>{
        props.add(id)
        
    }
    return (
        <div className="flex-container">
        <h2>Results for "{props.tag}"</h2>
        {
            
            props.searches&&
            props.searches.map(search=>(
                <div className="flex-item">
                    <Result search={search} add={add}/>
                </div>
            ))
        }
        </div>
    )
}
