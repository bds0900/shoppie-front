import React, { ReactElement } from 'react'
import { SearchType } from './Interfaces'

interface Props {
    search:SearchType
}

export default function Result(props: Props): ReactElement {
    return (
        <div>
            {props.search.Title}({props.search.Year})
        </div>
    )
}
