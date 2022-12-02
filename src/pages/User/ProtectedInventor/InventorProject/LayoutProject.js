import { Link, NavLink, Outlet, useParams } from "react-router-dom"
import { styles } from "../../../../constant"
import { IoChevronBackOutline } from "react-icons/io5"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import api from "../../../../controller/inventorController"
import { useEffect, useState } from "react"
import { useJwt } from "react-jwt";

const LayoutProject = ({ title }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    const { alat } = useParams()
    const [aspek, setAspek] = useState(null)
    const token = localStorage.getItem('token')

    const { decodedToken } = useJwt(token);

    const data = {
        dtoken: decodedToken,
        aspek: aspek,
        alat: alat
    }
    useEffect(() => {
        api.getAspek()
            .then((res) => {
                console.log(res)
                setAspek(res?.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <div className="w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter}`}>
                <div className={`${styles.boxContent} flex flex-col`}>
                    <Link to="/inventor/project" className="flex flex-row items-center gap-2 font-semibold text-[#1C768F] text-3xl">
                        <IoChevronBackOutline size={46} />
                        Back
                    </Link>
                    <div className="py-16">
                        <h1 className="font-semibold text-cardtext text-5xl">{title}</h1>
                    </div>
                    <div className="flex flex-row gap-14">
                        <div className="w-[500px]">
                            <NavLink
                                to={alat ? `/inventor/project/${alat}` : "/inventor/project/new-project"}
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
                            {alat && aspek && aspek.map((item, index) => (
                                <NavLink
                                    to={`/inventor/project/${alat}/${item.id_aspek}`}
                                    className={({ isActive }) =>
                                        isActive ? styles.inventorSideActive : styles.inventorSide
                                    }
                                    end
                                    key={index}
                                >
                                    <div className="flex justify-between items-center w-full">
                                        <div>
                                            <h2 className="font-medium text-xl">{item.nama}</h2>
                                            <p className="font-normal text-sm">{`Input your ${item.nama}`}</p>
                                        </div>
                                        <MdOutlineKeyboardArrowRight size={40} />
                                    </div>
                                </NavLink>
                            ))}
                        </div>

                        <div className="w-full">
                            <Outlet context={data}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LayoutProject