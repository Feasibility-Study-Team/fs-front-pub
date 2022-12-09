import { Link, NavLink } from "react-router-dom"
import { navLinks, styles } from "../constant"
import { FiUser } from "react-icons/fi"
import { useContext } from "react"
import { UserContext } from "../context/User"

const Header = () => {
    const { isAuth } = useContext(UserContext)
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
                                    end={index === 0 ? true : false}
                                >
                                    {item.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-12 items-center">
                            {isAuth ?
                                <div className="flex gap-12 items-center">
                                    <NavLink
                                        to="/inventor/profile"
                                        className={({ isActive }) =>
                                            isActive ? "text-[#1C768F]" : "text-black"
                                        }
                                    >
                                        <button>
                                            <FiUser size={24} />
                                        </button>
                                    </NavLink>

                                </div> :
                                <Link to="/login">
                                    <button className="w-24 h-9 bg-darkBlue text-white rounded hover:border-2 hover:border-darkBlue hover:text-darkBlue hover:bg-transparent ease-in-out duration-300">
                                        Login
                                    </button>
                                </Link>
                            }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header