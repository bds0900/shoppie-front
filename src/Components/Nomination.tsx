import React, { ReactElement } from 'react'
import { SearchType } from './Interfaces'

interface Props {
    nomination:SearchType
    remove:any
}

export default function Nomination(props: Props): ReactElement {
    return (
        <div>
            <div style={{display:"inline-block", margin:"10px"}}>
                {props.nomination.Title}({props.nomination.Year})
            </div>
            <button onClick={()=>(props.remove(props.nomination.imdbID))}>
                remove
            </button>

        </div>
    )
}
