import React from "react";
import {Category, CategoryTittle, CategoryDescription, ButtonLink} from "./style";

function CategoryOne () {
    return (
        <Category>
            <CategoryTittle>
                <p>NEW COLLECTION</p>
            </CategoryTittle>
            <CategoryDescription>
                <p>Our easiest chuck-on-and-go staples come with a serious style heritage <br/>
                    that’s liberating, sexy, comfy and supremely cool. </p>
            </CategoryDescription>
            <ButtonLink>
                <button>SHOP NEW ARRIVALS</button>
            </ButtonLink>
        </Category>
    )
}

export default CategoryOne;
