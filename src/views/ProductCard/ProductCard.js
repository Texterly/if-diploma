import React from "react";
import Header from "../TopSection/Header/Header";
import ProductSection from "./ProductSection/ProductSection";
import {colors} from "../../data/SiteConfig";


function ProductCard () {
    return(
        <><div>
            <Header wrapperStyle={{color: `${colors.black}`, fill: `${colors.black}`} }/>
            <ProductSection/>
        </div>
        </>
    )
}

export default ProductCard