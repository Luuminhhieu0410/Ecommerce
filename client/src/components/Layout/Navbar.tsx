import {Link} from "react-router-dom";
import type {CategoryApi} from "../../types/CategoryApi";
import type {CollectionApi} from "../../types/CollectionApi";
import {styles} from '../../styles/style'
import NavbarSkeleton from "../skeletons/NavbarSkeleton";

type Props = {
    isLoadingNavbar: boolean
    categories: CategoryApi[];
    collections: CollectionApi[];
};

const Navbar = ({categories, collections, isLoadingNavbar}: Props) => {
    return (
        <div className="lg:flex-4/6 hidden lg:block h-full">
            <ul className="flex justify-around items-center text-base h-full">
                {categories.map((cat) => (
                    <li
                        key={cat.id}
                        className={`relative group flex-1/6 h-full ${styles.flex_items_center}`}
                    >
                        <Link to={`/danh-muc/${cat.slug}`} className="">
                            {isLoadingNavbar ? <NavbarSkeleton /> : cat.name }
                        </Link>

                        {/* Mega Menu */}
                        {cat.children && cat.children.length > 0 && (
                            <div
                                className="fixed top-[74px] left-0 w-screen bg-gray-50 shadow-lg z-50 p-8 opacity-0 invisible transition-all translate-y-4 duration-150 ease-linear group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                                <div className="container grid grid-cols-3 lg:grid-cols-4 gap-8 w-full">
                                    {/* Cột danh mục con */}
                                    {cat.children.map((child) => (
                                        <div key={child.id}>
                                            {/* Tiêu đề cột */}
                                            <Link
                                                to={`/danh-muc/${child.slug}`}
                                                className="font-bold text-lg text-gray-900 block mb-3 border-b border-gray-300 pb-1 hover:underline"
                                            >
                                                {child.name}
                                            </Link>

                                            {/* List con */}
                                            <ul className="space-y-2">
                                                {child.children?.map((sub) => (
                                                    <li key={sub.id}>
                                                        <Link
                                                            to={`/danh-muc/${sub.slug}`}
                                                            className="text-gray-700 hover:text-black"
                                                        >
                                                            {sub.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}

                                    {/* Banner bên phải */}
                                    <div className={`col-span-1 ${styles.flex_items_center}`}>
                                        <img
                                            src="https://your-image-link-here.jpg"
                                            alt="Banner"
                                            className="rounded-2xl object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </li>
                ))}

                {/* Bộ sưu tập */}
                <li className={` flex-1/6 h-full ${styles.flex_items_center} relative group text-center `}>
                    <Link to="/bo-suu-tap" className="">
                        {isLoadingNavbar ? "" : "Bộ sưu tập"  }
                    </Link>
                    {/* Dropdown */}
                    {collections.length > 0 && (
                        <div
                            className="fixed top-[74px] left-0 w-screen bg-white shadow-lg opacity-0 invisible transition-all translate-y-4 duration-150 ease-linear group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-50 p-6">
                            <div className="grid grid-cols-4 gap-6 w-full">
                                {collections.map((col) => (
                                    <div key={col.id}>
                                        <Link
                                            to={`/bo-suu-tap/${col.slug}`}
                                            className="font-bold text-lg text-gray-900 hover:text-black block"
                                        >
                                            {col.name}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </li>

                <li className={`flex-1/6 ${styles.flex_items_center}`}>
                    <Link to="/ve-chung-toi" className="">
                        {isLoadingNavbar ? "" : "Về chúng tôi"}
                        
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
