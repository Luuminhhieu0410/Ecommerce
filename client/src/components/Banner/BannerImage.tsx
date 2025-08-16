import BannerSkeleton from "../skeletons/BannerSkeleton.tsx";
import {useState} from "react";


const BannerImage = ({src}) => {
    const [isloadingBanner, setLoadingBanner] = useState<true | false>(true);
    return (
        <div className="w-full h-auto">
            {isloadingBanner && <BannerSkeleton/>}
            <img className={`w-full max-h-[80vh] h-[30vh] sm:[50vh] md:h-[70vh] lg:h-[80vh]`}
                style={{display: isloadingBanner ? "none" : "block"}}
                 src={src}
                 alt="" onLoad={() => setLoadingBanner(false)}
                 onError={() => console.log('Image failed to load')}/>

        </div>
    );
};

export default BannerImage;