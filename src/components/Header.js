import { NavLink } from "react-router-dom"
import { navLinks, styles } from "../constant"
import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi"

const useAuth = () => {
    const isExpired = false;

    if (!isExpired) {
        return true;
    }

    return false;
}

const Header = () => {
    const isAuth = useAuth()

    return (
        <nav className={`${styles.paddingX} py-6 ${styles.flexCenter}`}>
            <div className={styles.boxContent}>
                <div className="w-full flex justify-end gap-24 text-lg font-medium">
                    <ul className="flex gap-24 items-center">
                        {navLinks.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        isActive ? "text-[#1C768F]" : "hover:font-bold text-black"
                                    }
                                    end
                                >
                                    {item.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-12 items-center">
                        <button>
                            <FiSearch size={24} />
                        </button>
                        {isAuth ?
                            <div className="flex gap-12 items-center">
                                <NavLink
                                    to="/inventor"
                                    className={({ isActive }) =>
                                        isActive ? "text-[#1C768F]" : "text-black"
                                    }
                                >
                                    <button>
                                        <FiUser size={24} />
                                    </button>
                                </NavLink>

                                <button>
                                    <FiShoppingBag size={24} />
                                </button>
                            </div> :
                            <button className="w-24 h-9 bg-darkBlue text-white rounded hover:border-2 hover:border-darkBlue hover:text-darkBlue hover:bg-transparent ease-in-out duration-300">
                                Login
                            </button>}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header