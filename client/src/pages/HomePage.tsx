import {Carousel} from 'antd';
import Header from '../components/Layout/Header.tsx';
import {RightOutlined, LeftOutlined} from '@ant-design/icons'
import {useRef} from "react";

const HomePage = () => {
    const carouselRef = useRef();
    return (
        <>
            <Header/>

            <div className="cursor-pointer">
                <Carousel ref={carouselRef} autoplay={true} autoplaySpeed={2000} className="" draggable={true}>
                    <div className={'abc'}>
                        <img className=""
                             data-src="https://1557691689.e.cdneverest.net/fast/0x0/filters:format(webp)/static.5sfashion.vn/storage/home/slider/cB7uQwxYwbpYMqwEZHMgVfQPKbwwdYLr.jpg"
                             src="https://1557691689.e.cdneverest.net/fast/0x0/filters:format(webp)/static.5sfashion.vn/storage/home/slider/cB7uQwxYwbpYMqwEZHMgVfQPKbwwdYLr.jpg"
                             alt="" data-ll-status="loaded"/>

                    </div>
                    <div>
                        <img className=""
                             data-src="https://1557691689.e.cdneverest.net/fast/0x0/filters:format(webp)/static.5sfashion.vn/storage/home/slider/D7K6Cva3D52mhTTCGExXGAIEnzxOp1Vi.jpg"
                             src="https://1557691689.e.cdneverest.net/fast/0x0/filters:format(webp)/static.5sfashion.vn/storage/home/slider/D7K6Cva3D52mhTTCGExXGAIEnzxOp1Vi.jpg"
                             alt="" data-ll-status="loaded"/>
                    </div>
                    <div>
                        <img className=""
                             data-src="https://1557691689.e.cdneverest.net/fast/0x0/filters:format(webp)/static.5sfashion.vn/storage/home/slider/pOUrApwIQHYoxbc64nyyZ6aF2LsAtC0K.jpg"
                             src="https://1557691689.e.cdneverest.net/fast/0x0/filters:format(webp)/static.5sfashion.vn/storage/home/slider/pOUrApwIQHYoxbc64nyyZ6aF2LsAtC0K.jpg"
                             alt="" data-ll-status="loaded"/>
                    </div>

                </Carousel>
                <button
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition"
                    onClick={() => { carouselRef.current.prev();}}
                >
                    <LeftOutlined/>
                </button>

                <button
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:opacity-95 transition"
                    onClick={() => carouselRef.current.next()}
                >
                    <RightOutlined/>
                </button>
            </div>

        </>
    );
};

export default HomePage;