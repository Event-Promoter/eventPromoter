import React from 'react'
import { useParams } from 'react-router-dom'

function EventScreen() {
    let{ title } = useParams();
    return (
        <div>
            {title}
        </div>
    )
}

export default EventScreen
