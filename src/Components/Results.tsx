import React, { ReactElement } from 'react'
import Result from './Result'
import { SearchType } from './Interfaces'

interface Props {
    searches:SearchType[]
    add:any
}


export default function Results(props:Props): ReactElement {
    const searches=props.searches
    console.log(searches)
    return (
        <div>
            {
                searches&&
                searches.map(search=>(
                    <li key={search.imdbID}>
                        <Result search={search}/>
                        <button onClick={()=>(
                            props.add(search.imdbID)
                        )}>
                        Nominate
                        </button>
                    </li>
                ))
            }
        </div>
    )
}
