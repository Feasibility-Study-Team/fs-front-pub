import { Outlet } from "react-router-dom"
import { Profile } from "../../../assets"
import { HeaderAdmin } from "../../../components"
import { styles } from "../../../constant"

const TambahLayout = () => {
  return (
    <div className={styles.adminStyle}>
        <HeaderAdmin  title="Feasibility Data" name="Muhammad Harsin" icon={Profile}/>
        <div className="mt-10 w-full">
            <Outlet />
        </div>
    </div>
  )
}

export default TambahLayout