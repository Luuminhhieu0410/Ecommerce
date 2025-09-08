import {Outlet} from "react-router-dom";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import { Suspense } from "react";

const ShopLayout = () => {
    return (
        <div>
            <Header/>
            <Suspense fallback={<>loading</>}>
            <Outlet />
            </Suspense>
            <Footer/>
        </div>

    );
};

export default ShopLayout;