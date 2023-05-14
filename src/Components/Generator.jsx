import React, { useState } from 'react';

export default function Generator() {
    const [saved, setSaved] = useState(false);
    const [info, setInfo] = useState('save')
    const [colors, setColors] = useState(['red', 'green', 'blue']);

    function generatePalette() {
        let r, g, b;
        r = Math.floor(Math.random() * 255);
        g = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function handleGenerateClick() {
        setInfo('save')
        const newColors = [
            generatePalette(),
            generatePalette(),
            generatePalette()
        ];
        setColors(newColors);
    }

    function saveCurrentPalette() {
        const paletteName = prompt("Enter Palette Name");
        const savedPalettes = JSON.parse(localStorage.getItem('palettes')) || [];
        savedPalettes.push({ name: paletteName, colors });
        localStorage.setItem('palettes', JSON.stringify(savedPalettes));
        setSaved(true);
        setInfo('saved');
    }

    return (
        <div className="container">
            <div className="colorPalette">
                <div className='color' style={{ background: colors[0] }}> <h1> {colors[0]} </h1> </div>
                <div className='color' style={{ background: colors[1] }}> <h1> {colors[1]} </h1> </div>
                <div className='color' style={{ background: colors[2] }}> <h1> {colors[2]} </h1> </div>
                <div className='options'>
                    <button onClick={handleGenerateClick} className="generate"> Generate </button>
                    <button onClick={saveCurrentPalette} className="save">  {info}
                    </button>
                </div>
            </div>
        </div>
    );
}