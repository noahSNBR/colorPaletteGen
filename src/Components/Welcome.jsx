import React from "react";
import malpalette from './Images/malpalette.png';

export default function Welcome({ openComponent }) {
    return (
        <>
            <div className="greetingScreen">
                <h1> Colors are cool </h1>
                <div className="navContainer">
                    <button onClick={() => openComponent('generator')} className="explorePalettes"> Generate </button> < br />
                    <button onClick={() => openComponent('explorer')} className="explorePalettes"> Explore </button> <br />
                    <button onClick={() => openComponent('savedPalettes')} className="explorePalettes"> See Saved </button>
                    <p> A quick color palette generator </p>
                </div>
                <img draggable='false' src={malpalette} className="palette" alt="Color Palette" />
            </div>
        </>
    );
}
