import React from 'react';
import Header from "./header/Header";
import ControlPanelContent from "./content/Control-Panel-content";

const ControlPanel = () => {
    return (
        <div>
            <Header />
            <ControlPanelContent />
        </div>
    );
}

export default ControlPanel;