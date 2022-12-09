import { useContext } from "react"
import { Profile } from "../../../assets"
import { HapusModal, HeaderAdmin, TableAdmin } from "../../../components"
import { styles } from "../../../constant"
import { AdminContext } from "../../../context/Admin"
const DataPenguji = () => {
  const { penguji, handleToInventor, openModal, handleModal, handlerHapus, setOpenModal } = useContext(AdminContext)

  return (
    <>
      <HapusModal open={openModal} onClose={() => setOpenModal(false)} handlerHapus={handlerHapus} />
      <div className={`${styles.adminStyle}`}>
        <HeaderAdmin title="Data Penguji" name="Muhammad Harsin" icon={Profile} />
        {penguji && <TableAdmin title="Tabel Penguji" res={penguji} handleModal={handleModal} handleUpdate={handleToInventor} titleUpdate="SET INVENTOR" />}
      </div>
    </>
  )
}

export default DataPenguji