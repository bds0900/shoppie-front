import React, { ReactElement } from 'react'
import { SearchType } from './Interfaces'

interface Props {
    search:SearchType
}

export default function Nomination(props: Props): ReactElement {
    const search=props.search
    return (
        <div>
            {search.Title}({search.Year})

        </div>
    )
}
