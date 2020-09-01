import React, { ReactElement, useState } from 'react'
import Nomination from './Nomination'
import { SearchType } from './Interfaces'
import Result from './Result'

interface Props {
    nominations:SearchType[]
    remove:any
}

export default function Nominations(props: Props): ReactElement {
    const remove=(id:string)=>{
        props.remove(id)
    }
    return (
        <div>
        {
            props.nominations&&
            props.nominations.map(nomination=>(
                <li key={nomination.imdbID}>
                    <Nomination nomination={nomination}/>
                    <button onClick={()=>(remove(nomination.imdbID))}>
                    remove
                    </button>
                </li>
            ))
        }
        </div>
    )
}
