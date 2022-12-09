import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../../context/User"

const InventorProfile = () => {
  const {user} = useContext(UserContext)
    const inventorStyle = {
        headingText: "font-medium text-xl text-cardtext",
        descText: "font-medium text-2xl text-detailtext"
      }
  return (
    <div className="w-full bg-card rounded-lg py-6 px-10 flex flex-col gap-6">
      <div className="w-full border-b-2 pb-6 font-semibold text-cardtext text-2xl">
        <h1>Profile</h1>
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <h2 className={inventorStyle.headingText}>Full Name</h2>
          <p className={inventorStyle.descText}>{user?.nama_lengkap || "-"}</p>
        </div>
        <div>
          <h2 className={inventorStyle.headingText}>Username</h2>
          <p className={inventorStyle.descText}>{user?.username || "-"}</p>
        </div>
        <div>
          <h2 className={inventorStyle.headingText}>Company</h2>
          <p className={inventorStyle.descText}>{user?.institusi?.nama_institusi || "-"}</p>
        </div>
        <div>
          <h2 className={inventorStyle.headingText}>NIK</h2>
          <p className={inventorStyle.descText}>{user?.deskripsi_alat || "-"}</p>
        </div>
        <div>
          <h2 className={inventorStyle.headingText}>Email</h2>
          <p className={inventorStyle.descText}>{user?.email || "-"}</p>
        </div>
        <div>
          <h2 className={inventorStyle.headingText}>Phone Number</h2>
          <p className={inventorStyle.descText}>{user?.nomor || "-"}</p>
        </div>
        <div>
          <h2 className={inventorStyle.headingText}>Password</h2>
          <p className={inventorStyle.descText}>{"*********"}</p>
        </div>
        <Link to="reset-password" className="font-medium text-xs mb-12">Change Password</Link>
      </div>
    </div>
  )
}

export default InventorProfile