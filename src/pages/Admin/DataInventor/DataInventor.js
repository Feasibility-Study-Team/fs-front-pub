import { useContext } from "react"
import { Profile } from "../../../assets"
import { HapusModal, HeaderAdmin, TableAdmin } from "../../../components"
import { styles } from "../../../constant"
import { AdminContext } from "../../../context/Admin"

const DataInventor = () => {
  const {inventor, handleToPenguji, openModal, handleModal, handlerHapus, setOpenModal} = useContext(AdminContext)

  return (
    <>
      <HapusModal open={openModal} onClose={() => setOpenModal(false)} handlerHapus={handlerHapus} />
      <div className={`${styles.adminStyle}`}>
        <HeaderAdmin title="Data Inventor" name="Muhammad Harsin" icon={Profile} />
        {inventor && <TableAdmin title="Tabel Inventor" res={inventor} handleModal={handleModal} handleUpdate={handleToPenguji} titleUpdate="SET PENGUJI"/>}
      </div>
    </>
  )
}

export default DataInventor