import { DashboardIcon } from "../../../assets"
import { styles } from "../../../constant"
import { MdOutlineLogout } from "react-icons/md"
import { RiUserSettingsFill } from "react-icons/ri"
import { CgFileDocument } from "react-icons/cg"
import { FaMoneyBill } from "react-icons/fa"
import { AiFillPieChart } from "react-icons/ai"
import { Link, Outlet } from "react-router-dom"

const Inventor = () => {
    const profileLinks = [
        {
            icon: <RiUserSettingsFill size={20} />,
            link: `/inventor/profile`,
            name: "Profile"
        },
        {
            icon: <AiFillPieChart size={20} />,
            link: `/inventor/project`,
            name: "Project Data"
        },
        {
            icon: <CgFileDocument size={20} />,
            link: `/inventor/feasibility`,
            name: "Feasibility Test Status"
        },
        {
            icon: <FaMoneyBill size={20} />,
            link: `/inventor/investor`,
            name: "Investor Funding"
        }
    ]
    return (
        <div className={`${styles.paddingX} py-10 ${styles.flexCenter}`}>
            <div className={styles.boxContent}>
                <div className="w-full flex flex-row gap-10">
                    <div className="flex basis-1/3 flex-col gap-9">
                        <div className="w-full bg-card rounded-lg p-6 flex gap-6">
                            <img src={DashboardIcon} alt="Alat" className="h-24 w-24 rounded-full" />
                            <p className="font-bold text-2xl text-cardtext">{"Testing"}</p>
                        </div>

                        <div className="w-full bg-card rounded-lg p-6 flex flex-col items-center h-full justify-between">
                            <ul className={`w-full`}>
                                {profileLinks && profileLinks.map((item, index) => (
                                    <li className="flex w-full h-16 items-center border-b-2" key={index}>
                                        <Link to={item.link} className="flex items-center gap-5 text-lg font-medium text-cardtext px-6">
                                            {item.icon}
                                            {item.name}
                                        </Link>

                                    </li>
                                ))}

                            </ul>
                            <Link to="/admin/alat" className="py-8">
                                <button className="flex gap-2 text-lg font-medium items-center text-cardtext">
                                    <MdOutlineLogout size={20} color="#C5221F" />
                                    Logout
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex basis-2/3">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inventor