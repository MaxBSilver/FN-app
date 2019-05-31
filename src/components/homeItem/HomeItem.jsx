import React from 'react'
import moment from 'moment';
export default function HomeItem(props) {
    console.log(props)
    console.log(props.time)
    return (
        <div>
            <h1>{props.title}</h1>
            <img alt={props.title} src={props.image}></img> 
            <p>{props.body}</p>
            <span>{moment(props.time).format('MM/DD/YYYY')}</span>
        </div>
    )
}
