import React, { useState, useEffect } from "react";

export default function Explorer() {
    const [palettesArray, setPalettesArray] = useState([]);

    useEffect(() => {
        setPalettesArray([]);
        createPalette(["red", "green", "blue"], "Red Green Blue");
        createPalette(["blue", "darkblue", "coral"], "Ocean");
        createPalette(["red", "orange", "yellow"], "Sunset");
        createPalette(["grey", "darkgrey", "orange"], "Castle");
        createPalette(["pink", "lightgreen", "purple"], "Neon");
        createPalette(["black", "darkgrey", "grey"], "Dark Shades");
        createPalette(["darkblue", "blue", "black"], "Deep Dark");
        createPalette(["Darkgreen", "green", "limegreen"], "Garden");
    }, []);

    function createPalette(colors, name) {
        const newPalette = { colors, name };
        setPalettesArray((prevPalettes) => [...prevPalettes, newPalette]);
    }

    const Styleset = {
        background: "rgba(1, 1, 1, 0.5)",
        width: "10vw",
        height: "10vw",
    };

    return (
        <div style={{
            overflow: "auto",
            height: '100vh'
        }}>
            <h1>Explore Palettes</h1>
            <div
                style={{
                    width: "100%",
                    background: "rgba(0, 0, 0, 0.25)",
                }}
                className="palettesContainer"
            >
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                    }}
                    className="allPalettes"
                >
                    {palettesArray.map((palette, index) => (
                        <div
                            style={{
                                width: "fit-content",
                                margin: "10px",
                                border: "none",
                                padding: "10px",
                                background: "#fff",
                                borderRadius: "12px",
                            }}
                            key={index}
                        >
                            <h1>{palette.name}</h1>
                            <div style={{ display: "flex" }}>
                                {palette.colors.map((color, colorIndex) => (
                                    <div
                                        key={colorIndex}
                                        style={{
                                            ...Styleset,
                                            backgroundColor: color,
                                            width: '18vh'
                                        }}
                                        className="color"
                                    >
                                        <p
                                            style={{
                                                color: "#fff",
                                                fontWeight: 900,
                                                fontSize: "2vh",
                                            }}
                                        >
                                            {color}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}