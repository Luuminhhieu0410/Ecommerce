import {Carousel} from "antd";
import {DoubleLeftOutlined, DoubleRightOutlined} from "@ant-design/icons";
import {useRef, useState} from "react";

import BannerImage from "./BannerImage.tsx";

const Banner = () => {
    const carouselRef = useRef(null);
    return (
        <div className="relative w-full cursor-pointer h-auto">
            <Carousel ref={carouselRef} className="!w-full h-auto " autoplay={true} autoplaySpeed={2000}
                      draggable={true}>
                <BannerImage
                    src={"https://1557691689.e.cdneverest.net/fast/0x0/filters:format(webp)/static.5sfashion.vn/storage/home/slider/7TZaCDNECTYPwCqv7aqWaiLvuEuDJ9z7.jpg"}
                />
                <BannerImage
                    src={"https://1557691689.e.cdneverest.net/fast/0x0/filters:format(webp)/static.5sfashion.vn/storage/home/slider/D7K6Cva3D52mhTTCGExXGAIEnzxOp1Vi.jpg"}
                />
                <BannerImage
                    src={"https://1557691689.e.cdneverest.net/fast/0x0/filters:format(webp)/static.5sfashion.vn/storage/home/slider/pOUrApwIQHYoxbc64nyyZ6aF2LsAtC0K.jpg"}
                />

            </Carousel>
            <button
                className="bg-[#ad0000] absolute top-[50%] left-2 transform -translate-y-1/2 bg-opacity-40 text-white w-[36px] h-[36px] rounded-[8px] hover:bg-opacity-60 transition"
                onClick={() => {
                    carouselRef.current.prev();
                }}
            >
                <DoubleLeftOutlined/>
            </button>

            <button
                className="bg-[#ad0000] absolute top-[50%] right-2 transform -translate-y-1/2 bg-opacity-40 text-white w-[36px] h-[36px] rounded-[8px] hover:opacity-95 transition"
                onClick={() => carouselRef.current.next()}
            >
                <DoubleRightOutlined/>
            </button>
        </div>

    )
        ;
};

export default Banner;