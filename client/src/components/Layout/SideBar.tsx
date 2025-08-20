import React, {useState, useEffect, useMemo, useRef} from "react";
import type {CategoryApi} from "../../types/CategoryApi";
import type {MenuProps} from 'antd';
import {Menu} from 'antd';
import {Link} from "react-router-dom";
import {CloseOutlined, MinusOutlined, PlusOutlined} from "@ant-design/icons";
import './SideBar.css';
import type {CollectionApi} from "../../types/CollectionApi.ts";

type MenuItem = Required<MenuProps>['items'][number];
type OpenStateProps = {
    isOpenSidebar: boolean,
    setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
    categories: CategoryApi[];
    collections: CollectionApi[];
}
const SideBar = ({isOpenSidebar, setIsOpenSidebar, categories, collections}: OpenStateProps) => {
    const [openKeys, setOpenKeys] = useState([]);
    const sideBarRef = useRef<HTMLDivElement>(null);
    console.log(categories);
    const items: MenuItem[] = useMemo(() => {
        return [...categories.map((category, key0) => ({
            key: String(key0),
            label: <Link className="!text-[#333] text-base font-normal"
                         to={`/danh-muc/${category.slug}`}>{category.name}</Link>,
            children: category.children?.map((itemLV1, key1) => ({
                key: `${key0}-${key1}`,
                label: <Link className="!text-[#333] text-base font-medium "
                             to={`/danh-muc/${itemLV1.slug}`}>{itemLV1.name}</Link>,
                children: itemLV1.children?.length == 0 ? null : itemLV1.children?.map((itemLV2, key2) => ({
                    key: `${key0}-${key1}-${key2}`,
                    label: <Link to={`/danh-muc/${itemLV2.slug}`}>{itemLV2.name}</Link>

                }))
            }))
        })), {
            key: "abc", label: <Link className="!text-[#333] text-base font-normal"
                                     to={`/bo-suu-tap`}>Bộ Sưu Tập</Link>,
              children: collections.length == 0 ? null : collections.map((collection, key) => {
                return {
                    key: key,
                    label: <Link to={`/bo-suu-tap/${collection.slug}`}>{collection.name}</Link>
                }
            })
        }];
    }, [categories]);

    const scrollTimeoutRef = useRef<number>(0)
    useEffect(() => {

        const container = sideBarRef.current;

        const handleScroll = () => {
            if (!container) return;
            console.log('000000')

            // thêm class để hiện scrollbar
            container.classList.add('show-scrollbar');

            // Xóa timeout cũ nếu có
            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);


            scrollTimeoutRef.current = setTimeout(() => {
                container.classList.remove('show-scrollbar');
            }, 200);
        };

        if (container) {
            container.addEventListener('scroll', handleScroll);
        }


        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        };
    }, []);
    // const onClick: MenuProps['onClick'] = (e) => {
    //     console.log('click ', e);
    //     setCurrent(e.key);
    // };


    return (
        <div className="relative">
            {/* Sidebar */}
            <div
                ref={sideBarRef}
                className={`fixed z-[1000] top-0 left-0 h-screen bg-white overflow-auto 
      transition-all duration-500 ease-in-out
      ${isOpenSidebar ? "w-[80vw] sm:w-[50vw] md:w-[45vw] scale-100 opacity-100"
                    : "w-0 scale-0 opacity-0"} 
    `}
            >
                {/* header */}
                <div className="h-[8vh] min-h-[56px] flex items-center justify-center bg-[#dadada]">
                    Danh mục
                </div>
                <Menu
                    className="!w-full h-[90vh] bg-white"
                    openKeys={openKeys}
                    onOpenChange={(keys) => setOpenKeys(keys)}
                    expandIcon={({isOpen}) => (isOpen ? <MinusOutlined/> : <PlusOutlined/>)}
                    defaultOpenKeys={['0', '1', '2', '3']}
                    mode="inline"
                    items={items}
                />
            </div>

            {/* Close Button */}
            {isOpenSidebar && (
                <div
                    onClick={() => setIsOpenSidebar(false)}
                    className="fixed z-[1001] left-[80vw] sm:left-[50vw] md:left-[45vw]
                 w-[50px] h-[50px] top-0 flex items-center bg-[#333] justify-center
                 cursor-pointer transition-all duration-500 ease-in-out"
                >
                    <CloseOutlined style={{fontSize: "35px", fontWeight: "100", color: "#fff"}}/>
                </div>
            )}

            {/* Overlay */}
            {isOpenSidebar && (
                <div
                    className="close-overlay fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,.7)] z-[999]"
                    onClick={() => {
                        setIsOpenSidebar(false)
                    }}
                />
            )}
        </div>


    );
};

export default SideBar;
