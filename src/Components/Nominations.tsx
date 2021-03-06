import React, { ReactElement } from 'react'
import Nomination from './Nomination'
import { SearchType } from './Interfaces'
import Result from './Result'

interface Props {
    nominations:SearchType[]
    remove:any
}

export default function Nominations(props: Props): ReactElement {
    const remove=(id:string)=>{
        props.remove(id)
    }
    return (
        <div className="flex-container">
        {props.nominations!==null?<h2>Nomination</h2>:null}
        {
            props.nominations&&
            props.nominations.map(nomination=>(
                <div className="flex-item">
                    <Nomination nomination={nomination} remove={remove}/>
                    
                </div>
            ))
        }
        </div>
    )
}
