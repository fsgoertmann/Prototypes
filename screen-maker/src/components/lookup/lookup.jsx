import React from 'react'

export default props => {
    const getOptions = () => {
        const list = props.values || []
        return Object.entries(list).map(component => (
            <option key={component[0]} value={component[0]}>{component[1].name}</option>
        ))
    }

    return (
        <select name={props.name} id={props.id.toLowerCase()}>
            {getOptions()}
        </select>
    )
}