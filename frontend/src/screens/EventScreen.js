import React from 'react'
// import { useParams } from 'react-router-dom'

function EventScreen() {
    const urlParams = new URLSearchParams(window.location.search);
    const type=urlParams.get('type')
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

export default EventScreen
