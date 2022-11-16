import { Link, Outlet, useParams } from "react-router-dom"
import { Profile } from "../../../assets"
import { HeaderAdmin } from "../../../components"
import { styles } from "../../../constant"
import { MdOutlineLogout } from "react-icons/md"
import { RiUserSettingsFill } from "react-icons/ri"
import { CgFileDocument } from "react-icons/cg"
import { useEffect, useState } from "react"
import api from "../../../controller/adminController"

const DetailAlat = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        api.getAlatId(id)
            .then((res) => {
                console.log(res?.data)
                setData(res?.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    const detailLinks = [
        {
            icon: <RiUserSettingsFill size={20} />,
            link: `/admin/alat/${id}`,
            name: "Data Alat"
        },
        {
            icon: <CgFileDocument size={20} />,
            link: `/admin/alat/${id}/feasibility`,
            name: "Feasibility Test Status"
        }
    ]
    return (
        <div className={styles.adminStyle}>
            <HeaderAdmin title="Detail Data Alat" name="Muhammad Harsin" icon={Profile} />
            {data &&
                <div className="flex flex-row w-full mt-10 h-full gap-10">
                    <div className="basis-1/3 flex flex-col gap-9">
                        <div className="w-full bg-card rounded-lg p-6 shadow-md flex gap-6">
                            <img src={data?.gambar_alat} alt="Alat" className="h-24 w-24 rounded-full" />
                            <p className="font-bold text-2xl text-cardtext">{data?.nama_alat}</p>
                        </div>
                        <div className="w-full bg-card rounded-lg p-6 shadow-md flex flex-col items-center">
                            <ul className={`w-full`}>
                                {detailLinks && detailLinks.map((item, index) => (
                                    <li className="flex w-full h-16 items-center border-b-2" key={index}>
                                        <Link to={item.link} className="flex items-center gap-5 text-lg font-medium text-cardtext px-6">
                                            {item.icon}
                                            {item.name}
                                        </Link>

                                    </li>
                                ))}

                            </ul>
                            <Link to="/admin/alat" className="mt-48">
                                <button className="flex gap-2 text-lg font-medium items-center text-cardtext">
                                    <MdOutlineLogout size={20} color="#C5221F" />
                                    Kembali
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="basis-2/3">
                        <Outlet context={data} />
                    </div>
                </div>
            }
        </div>
    )
}

export default DetailAlat