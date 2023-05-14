import React, { useState, useEffect } from "react";

export default function SavedPalettes() {
    const [saved, setSaved] = useState([]);

    useEffect(() => {
        const savedPalettes = JSON.parse(localStorage.getItem("palettes"));
        if (savedPalettes) {
            setSaved(savedPalettes);
        }
    }, []);

    return (
        <>
            <section className="table">
                <header>
                    <div className="col">Name</div>
                    <div className="col">Color 1</div>
                    <div className="col">Color 2</div>
                    <div className="col">Color 3</div>
                </header>
                {saved.map((palette, index) => (
                    <div className="row" key={index}>
                        <div className="col">{palette.name}</div>
                        <div className="col"><span style={{
                            color: palette.colors[0],
                            textShadow: `0px 0px 15px ${palette.colors[0]}`

                        }}>{palette.colors[0]}</span></div>

                        <div className="col"><span style={{
                            color: palette.colors[1],
                            textShadow: `0px 0px 15px ${palette.colors[1]}`

                        }}>{palette.colors[1]}</span></div>

                        <div className="col"><span style={{
                            color: palette.colors[2],
                            textShadow: `0px 0px 15px ${palette.colors[2]}`

                        }}>{palette.colors[2]}</span></div>
                    </div>
                ))}
            </section>
        </>
    );
}
