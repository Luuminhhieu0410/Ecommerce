import {navItems} from "../../static/data";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul className="flex">
                {navItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={item.url} className="text-black font-[500] px-6 cursor-pointer">
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Navbar;
