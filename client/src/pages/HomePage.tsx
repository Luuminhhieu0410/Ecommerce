import {useState} from "react";
import Header from '../components/Layout/Header.tsx';
import {useRef} from "react";
import Banner from "../components/Banner/Banner.tsx";
import SideBar from "../components/Layout/SideBar.tsx";

const HomePage = () => {


    return (
        <>
            <Header/>
            <Banner />
        </>
    );
};

export default HomePage;