import React from 'react'
import ReactDom from 'react-dom'
import classes from './MyModal.module.css'


const Backdrop = props => {
    return (
        <div
            onClick={props.onClose}
            className={classes.backdrop} >
        </div>
    )
}


const ModalBody = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content} >
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

const MyModal = (props) => {

    const myModal = document.getElementById('myModal')

    return (
        <React.Fragment>
            {ReactDom.createPortal(<Backdrop onClose={props.onClose} />, myModal)}
            {ReactDom.createPortal(<ModalBody >
                {props.children}
            </ModalBody>, myModal)}
        </React.Fragment>
    )
}

export default MyModal