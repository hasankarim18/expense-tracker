import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Spinner = (props) => {
    return (
        <div>
            <FontAwesomeIcon color={props.color} size={props.size} pulse icon={faSpinner} />
        </div>
    )
}

export default Spinner