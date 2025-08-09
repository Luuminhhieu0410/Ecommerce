import {navItems} from "../../static/data";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="w-[50%]">
            <ul className="flex justify-between items-center text-xs font-normal  lg:text-xs xl:text-sm ">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <Link to={item.url} className="cursor-pointer">
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>


        </div>
    );
};

export default Navbar;
