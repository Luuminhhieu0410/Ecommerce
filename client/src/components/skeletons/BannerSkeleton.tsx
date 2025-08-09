import { Skeleton } from 'antd';

const BannerSkeleton = () => {
    return (
        <div className="w-full h-[400px]">
            <Skeleton.Image
                active={true}
                className="!w-full !h-full absolute"
            />
        </div>
    );
};

export default BannerSkeleton;
