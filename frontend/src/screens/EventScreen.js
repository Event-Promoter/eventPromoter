import React from 'react'
import { useParams } from 'react-router-dom';
import SpacingGrid from "../components/CardGrid/cardGrid";

function EventScreen() {
    const urlParams = new URLSearchParams(window.location.search);
    const type =urlParams.get('type');
    return (
        <div>
            <h1 style={{textAlign:'center',marginTop:'4%'}}>{type} </h1>
            <SpacingGrid/>
        </div>
    )
}

export default EventScreen
