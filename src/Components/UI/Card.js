import React from 'react'
import classes from './Card.module.css'

const MyCard = (props) => {

    const classList = `${props.className}`

    return (
        <div className={classes.Card + ` ${props.className}`} >
            {props.children}
        </div>
    )
}

export default MyCard