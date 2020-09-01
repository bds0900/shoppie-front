import React, { ReactElement,useState } from 'react'


interface Props {
    handleSearch:any
}

export default function Search(props:Props): ReactElement {
    
    return (
        <div>
        <h3>Movie Title</h3>
        <input onChange={props.handleSearch}></input>
        </div>
    )
}
