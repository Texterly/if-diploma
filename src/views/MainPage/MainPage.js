import React from "react";
import TopSection from "../TopSection/TopSection";
import Shop from "../Shop/Shop";
import Sale from "../Sale/Sale";
import InstaShop from "../InstaShop/InstaShop";
import Footer from "../Footer/Footer";

function MainPage () {
    return(
        <>
        <TopSection/>
        <Shop/>
        <Sale/>
        <InstaShop/>
        <Footer/>
        </>
    )
}
export default MainPage;
