import { useEffect, useState } from "react"
import { BsPlus } from "react-icons/bs"
import { Link } from "react-router-dom"
import { Profile } from "../../../assets"
import { HeaderAdmin, TableInstitusi } from "../../../components"
import { styles } from "../../../constant"
import api from "../../../controller/adminController"

const DataInstitusi = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    api.getInstitusi()
        .then((res) => {
            console.log(res)
            setData(res)
        })
        .catch((err) => {
            console.log(err)
        })
}, [])
  return (
    <div className={styles.adminStyle}>
      <HeaderAdmin title="Data Institusi" name="Muhammad Harsin" icon={Profile} />
      <div className="mt-10 flex flex-row gap-4">
        <Link to="tambah"
          className="flex flex-row font-medium text-sm text-white bg-[#1C768F] py-[6px] px-3 rounded-lg items-center"
        >
          <BsPlus size={25} />
          Tambah Institusi
        </Link>
      </div>
      <TableInstitusi title="Data Institusi" res={data}/>
    </div>
  )
}

export default DataInstitusi