import {navItems} from "../../static/data";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="lg:flex-4/6 hidden lg:block">
            <ul className="flex justify-around items-center text-xs lg:text-xs xl:text-sm ">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <Link to={item.url} className="cursor-pointer ">
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>


        </div>
    );
};

export default Navbar;
