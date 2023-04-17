import './modal.css'
import React from 'react'

export default props => {
    const showModal = props.show ? 'display-block' : 'display-none'
    return (
        <div className={`modal ${showModal}`} id={props.modalId}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className='modal-header'>
                        <h5 className='modal-title'>{props.title}</h5>
                        <button type="button" className="close" onClick={e => props.setShow(!props.show)}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className='modal-body'>{props.children}</div>
                    <div className='modal-footer'>
                        <button type='button' className='btn btn-secondary' onClick={e => props.setShow(!props.show)}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}