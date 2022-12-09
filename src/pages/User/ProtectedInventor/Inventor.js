import { LogoRound } from "../../../assets"
import { styles } from "../../../constant"
import { MdOutlineLogout } from "react-icons/md"
import { RiUserSettingsFill } from "react-icons/ri"
import { CgFileDocument } from "react-icons/cg"
import { FaMoneyBill } from "react-icons/fa"
import { AiFillPieChart } from "react-icons/ai"
import { Link, Outlet } from "react-router-dom"
import { useContext, useEffect} from "react"
import { UserContext } from "../../../context/User"
import { IoSettings } from "react-icons/io5"
import { Loading } from "../../../components"

const Inventor = () => {
    const { logout, decodedToken, user, error, loading } = useContext(UserContext)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
        <>
            {error && <div>{error}</div>}
            {loading && <Loading height="h-screen"/>}
            {!error && !loading && user && <div className={`${styles.paddingX} py-10 ${styles.flexCenter}`}>
                <div className={styles.boxContent}>
                    {console.log('token', decodedToken)}
                    <div className="w-full flex flex-row gap-10">
                        <div className="flex basis-1/3 flex-col gap-9">
                            <div className="w-full bg-card rounded-lg p-6 flex gap-6 items-center">
                                <img src={LogoRound} alt="Alat" className="h-24 w-24 rounded-full" />
                                <div className="flex flex-col gap-1">
                                    <p className="font-bold text-2xl text-cardtext">{user?.nama_lengkap}</p>
                                    <p className="font-medium text-lg text-cardtext">{user?.role}</p>
                                </div>

                            </div>

                            <div className="w-full bg-card rounded-lg p-6 flex flex-col items-center justify-between">
                                <ul className={`w-full`}>
                                    {profileLinks && profileLinks.map((item, index) => (
                                        <li className="flex w-full h-16 items-center border-b-2" key={index}>
                                            <Link to={item.link} className="flex items-center gap-5 text-lg font-medium text-cardtext px-6">
                                                {item.icon}
                                                {item.name}
                                            </Link>

                                        </li>
                                    ))}
                                    {decodedToken?.role === "Penguji" && <li className="flex w-full h-16 items-center border-b-2">
                                        <Link to="/inventor/penguji" className="flex items-center gap-5 text-lg font-medium text-cardtext px-6">
                                            {<IoSettings />}
                                            Pengujian
                                        </Link>

                                    </li>}

                                </ul>
                                <button
                                    onClick={logout}
                                    className="flex gap-2 text-lg font-medium items-center text-cardtext pt-6"
                                >
                                    <MdOutlineLogout size={20} color="#C5221F" />
                                    Logout
                                </button>
                            </div>
                        </div>
                        <div className="flex basis-2/3">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Inventor