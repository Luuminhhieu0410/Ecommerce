import Navbar from "./Navbar";
import {Link} from "react-router-dom";
import logo from '../../assets/images/logo.png';
import {SearchOutlined} from '@ant-design/icons';
import SideBar from "./SideBar.tsx";
import {useEffect, useState} from "react";
import {Dropdown, type MenuProps,} from "antd";
import type {CategoryApi} from "../../types/CategoryApi.ts";
import {ServerUrl} from "../../server.ts";
import type {CollectionApi} from "../../types/CollectionApi.ts";
import { useUserStore } from "../../stores/UserStore.tsx";

const dropDownIconUser_notLoggedIn: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Link to={'/login'}>
                Đăng nhập
            </Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link to={'/login'}>
                Đăng ký
            </Link>
        ),
    },
];

const dropDownIconUser_LoggedIn: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Link to={'/user'}>
                Tài Khoản
            </Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link to={'/logout'}>
                Đăng xuất
            </Link>
        ),
    },

];


    const Header = () => {
        const {isAuthenticated} = useUserStore();
        const [isLoadingNavbar , setIsLoadingNavbar] = useState<boolean>(true);
        const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
        const [categories, setCategories] = useState<CategoryApi[]>([]);
        const [collections, setCollections] = useState<CollectionApi[]>([]);
        useEffect(() => {
            Promise.all([
                fetch(`${ServerUrl}/categories`).then(res => res.json()),
                fetch(`${ServerUrl}/collections`).then(res => res.json())
            ]).then(([dataCategories, dataCollections]) => {
                setTimeout(() => setIsLoadingNavbar(false) , 2000)
                setCategories(dataCategories);
                setCollections(dataCollections);    
            });
        }, []);
        return (
            // <div className="flex justify-center items-center px-[12px]" style={{background: "#fafafa"}}>
            <div className="container mx-auto flex items-center h-[74px]">
                {/*button open sidebar */}
                <div onClick={() => {
                    setIsOpenSidebar(true)
                }} className="header-menu lg:hidden flex-1/3 ml-2"> {/*button open sidebar */}
                    <div className="icon-menu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M19.5009 5H7.00525C6.31514 5 5.75569 5.55946 5.75569 6.24959C5.75569 6.93971 6.31514 7.49917 7.00525 7.49917H19.5009C20.191 7.49917 20.7504 6.93971 20.7504 6.24959C20.7504 5.55946 20.191 5 19.5009 5ZM4.50612 6.24959C4.50471 5.91871 4.37215 5.6019 4.1375 5.36863C3.65014 4.88414 2.86299 4.88414 2.37562 5.36863C2.14095 5.60188 2.00838 5.91871 2.007 6.24959C1.99767 6.33054 1.99767 6.4123 2.007 6.49325C2.02113 6.57468 2.04418 6.6543 2.07573 6.73068C2.10927 6.80469 2.14898 6.87575 2.19443 6.94311C2.2393 7.01316 2.29167 7.0781 2.35063 7.13679C2.40748 7.19343 2.47033 7.24371 2.53806 7.28674C2.60387 7.33466 2.67519 7.37452 2.75049 7.40545C2.83332 7.44842 2.92159 7.47995 3.0129 7.49917C3.09387 7.50823 3.17559 7.50823 3.25656 7.49917C3.58654 7.49944 3.90322 7.36917 4.1375 7.13679C4.19646 7.0781 4.24884 7.01316 4.2937 6.94311C4.33915 6.87575 4.37886 6.80469 4.41241 6.73068C4.45228 6.65522 4.48371 6.5756 4.50612 6.49325C4.51546 6.4123 4.51546 6.33054 4.50612 6.24959ZM4.50612 11.8727C4.51542 11.7918 4.51542 11.71 4.50612 11.6291C4.48453 11.5484 4.45306 11.4708 4.41241 11.3979C4.38021 11.3212 4.34045 11.248 4.2937 11.1792C4.25038 11.1099 4.19784 11.0469 4.1375 10.9918C3.65014 10.5073 2.86299 10.5073 2.37562 10.9918C2.14095 11.225 2.00838 11.5418 2.007 11.8727C2.00943 12.0374 2.04116 12.2003 2.10072 12.3538C2.13204 12.4277 2.16966 12.4988 2.21318 12.5662C2.2607 12.6342 2.31514 12.697 2.37562 12.7537C2.43082 12.8139 2.49386 12.8664 2.56305 12.9099C2.62884 12.9578 2.70016 12.9977 2.77548 13.0286C2.85168 13.0607 2.93135 13.0837 3.0129 13.0973C3.09283 13.1152 3.17464 13.1236 3.25656 13.1223C3.33751 13.1316 3.41928 13.1316 3.50023 13.1223C3.57974 13.1087 3.65735 13.0856 3.7314 13.0536C3.80876 13.0229 3.88217 12.983 3.95007 12.9349C4.01926 12.8914 4.0823 12.8389 4.1375 12.7787C4.19773 12.7235 4.25026 12.6604 4.2937 12.5912C4.34173 12.5255 4.38159 12.4542 4.41241 12.3788C4.45509 12.2959 4.4866 12.2076 4.50612 12.1164C4.51573 12.0354 4.51573 11.9537 4.50612 11.8727ZM4.50612 17.4959C4.51538 17.4149 4.51538 17.3331 4.50612 17.2522C4.48453 17.1696 4.45306 17.0899 4.41241 17.0148C4.37886 16.9408 4.33915 16.8697 4.2937 16.8023C4.25026 16.7331 4.19773 16.6701 4.1375 16.6149C3.65014 16.1304 2.86299 16.1304 2.37562 16.6149C2.3154 16.6701 2.26286 16.7331 2.21943 16.8023C2.17397 16.8697 2.13427 16.9408 2.10072 17.0148C2.06831 17.0908 2.04523 17.1706 2.03199 17.2522C2.01439 17.3322 2.00601 17.4139 2.007 17.4959C2.00841 17.8267 2.14097 18.1435 2.37562 18.3768C2.43082 18.437 2.49386 18.4896 2.56305 18.533C2.62884 18.581 2.70016 18.6208 2.77548 18.6517C2.85168 18.6838 2.93135 18.7069 3.0129 18.7204C3.09283 18.7384 3.17464 18.7468 3.25656 18.7454C3.33751 18.7548 3.41928 18.7548 3.50023 18.7454C3.57974 18.7318 3.65735 18.7087 3.7314 18.6767C3.80876 18.646 3.88217 18.6062 3.95007 18.558C4.01926 18.5146 4.0823 18.462 4.1375 18.4018C4.19773 18.3466 4.25026 18.2836 4.2937 18.2144C4.34177 18.1487 4.38163 18.0773 4.41241 18.0019C4.45505 17.919 4.48656 17.8307 4.50612 17.7395C4.51573 17.6586 4.51573 17.5768 4.50612 17.4959ZM20.7504 10.6231H7.00525C6.31514 10.6231 5.75569 11.1826 5.75569 11.8727C5.75569 12.5628 6.31514 13.1223 7.00525 13.1223H20.7504C21.4405 13.1223 22 12.5628 22 11.8727C22 11.1826 21.4405 10.6231 20.7504 10.6231ZM15.1274 16.2463H7.00525C6.31514 16.2463 5.75569 16.8057 5.75569 17.4959C5.75569 18.186 6.31514 18.7454 7.00525 18.7454H15.1274C15.8175 18.7454 16.377 18.186 16.377 17.4959C16.377 16.8057 15.8175 16.2463 15.1274 16.2463Z"
                                fill="#0F0F0F"></path>
                        </svg>
                    </div>
                </div>
                <Link to={"/"} className="lg:flex-1/6 flex-1/3 flex items-center justify-center">
                    <img src={logo} alt="Logo"/>
                </Link>

                <Navbar isLoadingNavbar={isLoadingNavbar} categories={categories} collections={collections}/>

                <div className="flex flex-2/6 items-center justify-around ">
                    <div
                        className=" h-full hidden lg:flex lg:flex-4/5 border rounded-lg border-solid border-[#d9d9d9] "> {/* khung search */}
                        <div className=" mx-2 w-[10%] flex justify-center items-center">
                            <SearchOutlined
                                style={{color: "grey", fontSize: "18px"}}/>
                        </div>
                        <input type="text" placeholder="Tìm kiếm sản phẩm..."
                               className="h-[40px] w-full focus:outline-none placeholder:text-sm"/>
                    </div>
                    <div className=" action-header flex flex-1 lg:flex-1/5 items-center justify-end lg:pr-3">

                        <Dropdown menu={{items: isAuthenticated ? dropDownIconUser_LoggedIn : dropDownIconUser_notLoggedIn}} placement="bottom">
                            <div className="account-header mr-2 py-2"> {/* icon user */}
                                <div className="account-icon">
                                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.99676 13.1748C3.68376 13.1748 -0.000244141 13.8548 -0.000244141 16.5748C-0.000244141 19.2958 3.66076 19.9998 7.99676 19.9998C12.3098 19.9998 15.9938 19.3208 15.9938 16.5998C15.9938 13.8788 12.3338 13.1748 7.99676 13.1748"
                                            fill="#0F0F0F"></path>
                                        <path
                                            d="M7.99683 10.584C10.9348 10.584 13.2888 8.229 13.2888 5.292C13.2888 2.355 10.9348 0 7.99683 0C5.05983 0 2.70483 2.355 2.70483 5.292C2.70483 8.229 5.05983 10.584 7.99683 10.584"
                                            fill="#0F0F0F"></path>
                                    </svg>
                                </div>
                            </div>
                        </Dropdown>

                        <div className="cart-header mr-2 lg:mr-0"> {/* icon cart */}
                            <a href="#">
                                <div className="cart-info">
                                    <div className="cart-icon">
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M3.91064 18.5884C3.91064 17.7484 4.59064 17.0684 5.43064 17.0684C6.26064 17.0684 6.94064 17.7484 6.94064 18.5884C6.94064 19.4184 6.26064 20.0984 5.43064 20.0984C4.59064 20.0984 3.91064 19.4184 3.91064 18.5884ZM15.1606 18.5884C15.1606 17.7484 15.8406 17.0684 16.6806 17.0684C17.5106 17.0684 18.1906 17.7484 18.1906 18.5884C18.1906 19.4184 17.5106 20.0984 16.6806 20.0984C15.8406 20.0984 15.1606 19.4184 15.1606 18.5884Z"
                                                  fill="#0F0F0F"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M18.1907 4.34933C18.8007 4.34933 19.2007 4.55933 19.6007 5.01933C20.0007 5.47933 20.0707 6.13933 19.9807 6.73833L19.0307 13.2983C18.8507 14.5593 17.7707 15.4883 16.5007 15.4883H5.59074C4.26074 15.4883 3.16074 14.4683 3.05074 13.1493L2.13074 2.24833L0.620742 1.98833C0.220742 1.91833 -0.0592579 1.52833 0.0107421 1.12833C0.0807421 0.71833 0.470742 0.44833 0.880742 0.50833L3.26574 0.86833C3.60574 0.92933 3.85574 1.20833 3.88574 1.54833L4.07574 3.78833C4.10574 4.10933 4.36574 4.34933 4.68574 4.34933H18.1907ZM12.1309 9.54785H14.9009C15.3209 9.54785 15.6509 9.20785 15.6509 8.79785C15.6509 8.37785 15.3209 8.04785 14.9009 8.04785H12.1309C11.7109 8.04785 11.3809 8.37785 11.3809 8.79785C11.3809 9.20785 11.7109 9.54785 12.1309 9.54785Z"
                                                  fill="#0F0F0F"></path>
                                        </svg>
                                    </div>

                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                {/* side bar ẩn khi responsive mobile */}
                <SideBar isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar}  categories={categories}
                         collections={collections}/>

            </div>
            // </div>
        );
    };


export default Header;
