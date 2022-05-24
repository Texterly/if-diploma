import Item from "./Item";
import React from "react";
import {StyleItems} from "./style";


function Blocks ({data}) {
    return(
        <>
            <StyleItems>
            {data.map(element => <Item key={element.id} item={element}/>)}
            </StyleItems>
        </>
    )
}

export default Blocks