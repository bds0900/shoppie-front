import React, { ReactElement } from 'react'
import { SearchType } from './Interfaces'

interface Props {
    nomination:SearchType
    remove:any
}

export default function Nomination(props: Props): ReactElement {
    return (
        <div>
            {props.nomination.Title}({props.nomination.Year})
            <button onClick={()=>(props.remove(props.nomination.imdbID))}>
                remove
            </button>

        </div>
    )
}
