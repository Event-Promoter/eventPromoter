import React from 'react'
import { useParams } from 'react-router-dom'

function EventScreen() {
    const urlParams = new URLSearchParams(window.location.search);
    const type=urlParams.get('type')
    console.log(type)
    return (
        <div>
            {type}
        </div>
    )
}

export default EventScreen
