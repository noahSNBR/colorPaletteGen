import React, { useState } from "react";
import Explorer from "./Explorer";
import Generator from "./Generator";
import Welcome from "./Welcome";

export default function Interface() {
    const [explorer, setExplorer] = useState(false);
    const [generator, setGenerator] = useState(false);

    function openComponent(component) {
        component === 'explorer' ? setExplorer(!explorer) : setGenerator(!generator);
    }

    return (
        <>
            {explorer && <Explorer />}
            {generator && <Generator />}
            {!explorer && !generator && <Welcome openComponent={openComponent} />}
        </>
    );
}
