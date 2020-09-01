import React, { ReactElement } from 'react'
import { SearchType } from './Interfaces'

interface Props {
    nomination:SearchType
}

export default function Nomination(props: Props): ReactElement {
    return (
        <div>
            {props.nomination.Title}({props.nomination.Year})

        </div>
    )
}
