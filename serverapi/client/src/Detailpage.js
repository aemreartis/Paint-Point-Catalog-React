import React from 'react';
import GeneralNavbar from "./components/GeneralNavbar";
import Hidden from "./components/Hidden";
import DetailPage from "./components/detailPage"
function Detailpage() {
    return (

        <div>

            {/* Navigation Bar */}
            <GeneralNavbar/>
            {/* Navigation Bar */}
            <Hidden/>

            <DetailPage/>
        </div>
    );
}

export default Detailpage;
