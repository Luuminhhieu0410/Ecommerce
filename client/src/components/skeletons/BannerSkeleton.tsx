import { Skeleton } from 'antd';

const BannerSkeleton = () => {
    return (
        <div className="w-full max-h-[80vh] h-[35vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
            <Skeleton.Image
                active={true}
                className="!w-full !h-full "
            />
        </div>
    );
};

export default BannerSkeleton;
