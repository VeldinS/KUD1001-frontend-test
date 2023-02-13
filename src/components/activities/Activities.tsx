import React, {useEffect, useState} from 'react';
import Header from "./header/Header";
import ActivitiesContent from "./content/Activities-content";

const Activities = () => {
    return (
        <div>
            <Header />
            <ActivitiesContent />
        </div>
    );
}

export default Activities;