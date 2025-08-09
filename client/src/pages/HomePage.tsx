import {useState} from "react";
import Header from '../components/Layout/Header.tsx';
import {useRef} from "react";
import Banner from "../components/Banner/Banner.tsx";

const HomePage = () => {


    return (
        <>
            <Header/>
            <Banner />
        </>
    );
};

export default HomePage;