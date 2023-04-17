import React from 'react'
import Lookup from '../lookup/lookup'

export default props => (
    <Lookup name={props.name} id={props.name} values={props.values}></Lookup>
)