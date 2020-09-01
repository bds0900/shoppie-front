import React, { ReactElement } from 'react'
import { SearchType } from './Interfaces'

interface Props {
    search:SearchType
    add:any
}

export default function Result(props: Props): ReactElement {
    return (
        <div>
            <div style={{display:"inline-block", margin:"10px"}}>
                {props.search.Title}({props.search.Year})
            </div>
            <button 
                id={props.search.imdbID} 
                onClick={()=>(props.add(props.search.imdbID))}>
                Nominate
            </button>
        </div>
    )
}
