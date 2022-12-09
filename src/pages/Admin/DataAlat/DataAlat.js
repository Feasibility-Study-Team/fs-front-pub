import { useContext } from "react"
import { Profile } from "../../../assets"
import { HeaderAdmin, TableAlat } from "../../../components"
import { styles } from "../../../constant"
import { AdminContext } from "../../../context/Admin"

const DataAlat = () => {
  const { alat } = useContext(AdminContext)

  return (
    <div className={styles.adminStyle}>
      <HeaderAdmin title="Data Alat" name="Muhammad Harsin" icon={Profile} />
      {alat && <TableAlat res={alat} title="Data Alat" />}
    </div>
  )
}

export default DataAlat