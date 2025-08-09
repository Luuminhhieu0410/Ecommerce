import BannerSkeleton from "../skeletons/BannerSkeleton.tsx";
import {useState} from "react";

const BannerImage = ({src}) => {
    const [isloadingBanner, setLoadingBanner] = useState<true | false>(true);
    return (
        <div className="w-full">
            {isloadingBanner && <BannerSkeleton/>}
            <img className="w-full max-h-[80vh] h-[35vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
                 src={src}
                 alt="" onLoad={() => setLoadingBanner(false)}
                 onError={() => console.log('Image failed to load')}/>


        </div>
    );
};

export default BannerImage;