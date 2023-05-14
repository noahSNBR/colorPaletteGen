import React, { useState } from "react";
import Explorer from "./Explorer";
import Generator from "./Generator";
import Welcome from "./Welcome";
import SavedPalettes from "./SavedPalettes";

export default function Interface() {
    const [explorer, setExplorer] = useState(false);
    const [generator, setGenerator] = useState(false);
    const [savedPalettes, setSavedpalettes] = useState(false);

    function openComponent(component) {
        component === 'explorer' ? setExplorer(!explorer) :
            component === 'generator' ? setGenerator(!generator) :
                component === 'savedPalettes' ? setSavedpalettes(!savedPalettes) :
                    console.error("directing")
    }

    return (
        <>
            {savedPalettes && <SavedPalettes />}
            {explorer && <Explorer />}
            {generator && <Generator />}
            {!explorer && !generator && !savedPalettes && <Welcome openComponent={openComponent} />}
        </>
    );
}
