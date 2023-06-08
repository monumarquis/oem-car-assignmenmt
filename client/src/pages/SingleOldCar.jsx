import React from 'react'
import { useParams } from 'react-router-dom'

const SingleOldCar = () => {
    const { id } = useParams()
    console.log(id);
    return (
        <div>SingleOldCar</div>
    )
}

export default SingleOldCar