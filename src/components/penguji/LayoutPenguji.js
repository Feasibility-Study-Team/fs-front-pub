import { useContext } from "react"
import { IoChevronBackOutline } from "react-icons/io5"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link, NavLink, Outlet } from "react-router-dom"
import { styles } from "../../constant"
import { UjiContext } from "../../context/Uji"

const LayoutPenguji = () => {
    const { aspek } = useContext(UjiContext)
    return (
        <div className="w-full overflow-hidden">
            {console.log("context", aspek)}
            <div className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter}`}>
                <div className={`${styles.boxContent} flex flex-col`}>
                    <Link to="/inventor/penguji" className="flex flex-row items-center gap-2 font-semibold text-[#1C768F] text-3xl">
                        <IoChevronBackOutline size={46} />
                        Back
                    </Link>
                    <div className="py-16">
                        <h1 className="font-semibold text-cardtext text-5xl">Project Data</h1>
                    </div>
                    <div className="flex flex-row gap-14">
                        <div className="w-[500px]">
                            <NavLink
                                to=""
                                className={({ isActive }) =>
                                    isActive ? styles.inventorSideActive : styles.inventorSide
                                }
                                end
                            >
                                <div className="flex justify-between items-center w-full">
                                    <div>
                                        <h2 className="font-medium text-xl">Description<span className="text-red-600">*</span></h2>
                                        <p className="font-normal text-sm">Input your project description</p>
                                    </div>
                                    <MdOutlineKeyboardArrowRight size={40} />
                                </div>
                            </NavLink>
                            {aspek && aspek.map((item, index) => (
                                <NavLink
                                    to={`${item?.id_aspek}`}
                                    className={({ isActive }) =>
                                        isActive ? styles.inventorSideActive : styles.inventorSide
                                    }
                                    end
                                    key={index}
                                >
                                    <div className="flex justify-between items-center w-full">
                                        <div>
                                            <h2 className="font-medium text-xl">{item.nama}</h2>
                                            <p className="font-normal text-sm">{`Show the ${item.nama}`}</p>
                                        </div>
                                        <MdOutlineKeyboardArrowRight size={40} />
                                    </div>
                                </NavLink>
                            ))}

                            <NavLink
                                to="review"
                                className={({ isActive }) =>
                                    isActive ? styles.inventorSideActive : styles.inventorSide
                                }
                                end
                            >
                                <div className="flex justify-between items-center w-full">
                                    <div>
                                        <h2 className="font-medium text-xl">Project Review<span className="text-red-600">*</span></h2>
                                        <p className="font-normal text-sm">Input Project Review</p>
                                    </div>
                                    <MdOutlineKeyboardArrowRight size={40} />
                                </div>
                            </NavLink>
                        </div>

                        <div className="w-full">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LayoutPenguji