import { useEffect, useState } from "react"
import { Profile } from "../../../assets"
import { HeaderAdmin, TableAlat } from "../../../components"
import { styles } from "../../../constant"
import api from "../../../controller/adminController"

const DataAlat = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    api.getAlat()
      .then((res) => {
        setData(res)
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  return (
    <div className={styles.adminStyle}>
      <HeaderAdmin title="Data Alat" name="Muhammad Harsin" icon={Profile} />
      {data && <TableAlat res={data} title="Data Alat" />}
    </div>
  )
}

export default DataAlat