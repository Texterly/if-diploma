import React, {useEffect, useState} from "react";
import TopSection from "../TopSection/TopSection";
import Shop from "../Shop/Shop";
import Sale from "../Sale/Sale";
import InstaShop from "../InstaShop/InstaShop";
import Footer from "../Footer/Footer";

function MainPage () {

    const [serverData, setServerData] = useState([])

    useEffect(() => {

        fetch('https://modnikky-api.herokuapp.com/api/catalog')
            .then((response) => {
                return response.json()
            })
            .then(setServerData)
    },[])

    console.log(serverData)

    return (
        <>
            <TopSection/>
            <Shop/>
            { serverData.length > 0 && <Sale data={serverData}/>}
            <InstaShop/>
            <Footer/>
        </>
    )
}
export default MainPage;
