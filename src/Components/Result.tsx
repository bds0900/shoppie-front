import React, { ReactElement } from 'react'
import { SearchType } from './Interfaces'

interface Props {
    search:SearchType
}

export default function Result(props: Props): ReactElement {
    console.log(props.search)
    const search=props.search
    return (
        <div>
            {search.Title}({search.Year})
        </div>
    )
}
