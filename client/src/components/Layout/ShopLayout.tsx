import {Outlet} from "react-router-dom";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import { Suspense } from "react";
import { LoaderIcon } from "lucide-react"


const ShopLayout = () => {

    return (
        <div>
            <Header/>
            {/* <Suspense fallback={<><SpinnerCustom /> </>}> */}
            <Outlet />
            {/* </Suspense> */}
            <Footer/>
        </div>

    );
};

function Spinner({...props }: React.ComponentProps<"svg">) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={"size-11 animate-spin"}
      {...props}
    />
  )
}

export function SpinnerCustom() {
  return (
    <div className="flex w-[1000px] h-[500px] items-center gap-4">
      <Spinner />
    </div>
  )
}

export default ShopLayout;