import React, { ReactElement } from 'react'
import Nomination from './Nomination'
import { SearchType } from './Interfaces'
import Result from './Result'

interface Props {
    nominations:SearchType[]
    remove:any
}

export default function Nominations(props: Props): ReactElement {
    const nominations=props.nominations
    return (
        <div>
            {
                nominations&&
                nominations.map(nomination=>(
                    <li key={nomination.imdbID}>
                        <Result search={nomination}/>
                        <button onClick={()=>(
                            props.remove(nomination.imdbID)
                        )}>
                        Nominate
                        </button>
                    </li>
                ))
            }
        </div>
    )
}
