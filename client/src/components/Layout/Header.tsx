import Navbar from "./Navbar";
import {Link} from "react-router-dom";
import logo from '../../assets/images/logo.png';
import {SearchOutlined} from '@ant-design/icons';
import {Input} from 'antd';

const Header = () => {
    return (
        <div className="flex justify-center items-center px-[12px]" style={{background: "#fafafa"}}>
            <div className="container flex flex-row items-center justify-between h-[74px]">
                <Link to={"/"}>
                    <img src={logo} alt="Logo"/>
                </Link>
                <Navbar/>
                <div className="flex gap-3">
                    <Input size="large" placeholder="Tìm kiếm sản phẩm..." prefix={<SearchOutlined/>}/>
                    <div className="action-header flex justify-between items-center">
                        <div className="account-header mr-2">
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
                        <div className="cart-header">
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
            </div>
        </div>
    );
};

export default Header;
