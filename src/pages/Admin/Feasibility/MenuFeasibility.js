import { useEffect, useState } from "react"
import { BsPlus } from "react-icons/bs"
import { Link } from "react-router-dom"
import { Profile } from "../../../assets"
import { HeaderAdmin, TableFeasibility } from "../../../components"
import { styles } from "../../../constant"
import api from "../../../controller/adminController"

const MenuFeasibility = () => {
    const [feasibility, setFeasibility] = useState(null)
    useEffect(() => {
        api.getAspek()
            .then((res) => {
                console.log(res)
                setFeasibility(res?.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <div className={styles.adminStyle}>
                <HeaderAdmin title="Feasibility Data" name="Muhammad Harsin" icon={Profile} />
                <div className="mt-10 flex flex-row gap-4">
                    <Link
                        to="tambah/data"
                        className="flex flex-row font-medium text-sm text-white bg-[#1C768F] py-[6px] px-3 rounded-lg items-center"
                    >
                        <BsPlus size={25} />
                        <p>Tambah Data</p>
                    </Link>

                    <Link
                        to="tambah/parameter"
                        className="flex flex-row font-medium text-sm text-white bg-[#1C768F] py-[6px] px-3 rounded-lg items-center"
                    >
                        <BsPlus size={25} />
                        <p>Tambah Parameter</p>
                    </Link>

                    <Link
                        to="tambah/aspek"
                        className="flex flex-row font-medium text-sm text-white bg-[#1C768F] py-[6px] px-3 rounded-lg items-center"
                    >
                        <BsPlus size={25} />
                        <p>Tambah Aspek</p>
                    </Link>
                </div>
                <TableFeasibility res={feasibility} title="Feasibility Aspek"/>
            </div>
        </>
    )
}

export default MenuFeasibility