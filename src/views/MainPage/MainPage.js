import React, {useEffect, useState} from "react";
import TopSection from "../TopSection/TopSection";
import Shop from "../Shop/Shop";
import Sale from "../Sale/Sale";
import InstaShop from "../InstaShop/InstaShop";
import Footer from "../Footer/Footer";
import FilterResult from '../FilterResult/FilterResult';
import {goods} from "../../ducks/getAllProducts/selectors";
import {clickFilter} from "../../ducks/clickFilter/selectors";
import {useSelector} from "react-redux";
import NotFound from "../FilterResult/NotFound";

// import ProductCard from "../ProductCard/ProductCard";

function MainPage () {

    const [serverData, setServerData] = useState([]);
    const [sumVisibleCards, setSumVisibleCards] = useState(4);
    const [userWantsToSearch, setUserWantsToSearch] = useState(false)


    const goodsData = useSelector(goods);
    const userClickFilter = useSelector(clickFilter);

    useEffect(() => {

        fetch('https://modnikky-api.herokuapp.com/api/catalog')
            .then((response) => {
                return response.json()
            })
            .then(setServerData)
    },[])
    return (
        <>
            <TopSection     userWantsToSearch={userWantsToSearch}
                            setUserWantsToSearch={setUserWantsToSearch}
            />
            <Shop setSumVisibleCards={setSumVisibleCards}
            />
            <FilterResult sumVisibleCards={sumVisibleCards}
                          setSumVisibleCards={setSumVisibleCards}
                          arrayData={goodsData}
                          condition={userClickFilter}

            />
            <NotFound/>
            { serverData.length > 0 && <Sale data={serverData}/>}
            <InstaShop/>
            <Footer/>
            {/*<ProductCard/>*/}
        </>
    )
}
export default MainPage;
