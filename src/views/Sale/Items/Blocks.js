import Item from "./Item";
import React from "react";
import { StyleItems} from "./style";
import './style.css'
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import SwiperCore, {Navigation, EffectFade} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

SwiperCore.use([Navigation, EffectFade]);

function Blocks ({data}) {
    return(
        <>
            <StyleItems>

                <Swiper
                    modules={[Navigation, EffectFade]}
                    spaceBetween={24}
                    slidesPerView={4}
                    navigation
                    effect
                    speed={1000}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {data.map(element => (
                        <SwiperSlide key={element.id}>
                                        <Item key={element.id} item={element}/>
                        </SwiperSlide>))}
                </Swiper>
            </StyleItems>
        </>
    )
}

export default Blocks