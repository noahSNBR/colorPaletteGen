import React, { useState } from 'react';

export default function Generator() {
    const [colors, setColors] = useState(['red', 'green', 'blue']);

    function generatePalette() {
        let r, g, b;
        r = Math.floor(Math.random() * 255);
        g = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function handleGenerateClick() {
        console.log('Button clicked');
        const newColors = [
            generatePalette(),
            generatePalette(),
            generatePalette()
        ];
        setColors(newColors);
    }

    function saveCurrentPalette() {

    }


    return (
        <div className="container">
            <div className="colorPalette">
                <div className='color' style={{ background: colors[0] }}> </div>
                <div className='color' style={{ background: colors[1] }}> </div>
                <div className='color' style={{ background: colors[2] }}> </div>
                <div className='options'>
                    <button onClick={handleGenerateClick} className="generate"> Generate </button>
                    <button onClick={saveCurrentPalette} className="save"> Save </button>
                </div>
            </div>
        </div>
    );
}