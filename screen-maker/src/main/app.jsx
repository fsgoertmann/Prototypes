import 'modules/bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import Modal from '../components/modal/modal.jsx'
import Selection from '../components/selection/selection.jsx'
import data from '../data/data.json'

export default props => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <Modal title='test' modalId='testmodal' show={show} setShow={setShow}>
                <Selection name={data.components.name} values={data.components.values}></Selection>
            </Modal>
            <button type="button" className="btn btn-primary" onClick={e => setShow(!show)}>+</button>
        </div>
    )
}