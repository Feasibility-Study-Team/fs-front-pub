import { useEffect, useState } from "react"
import { Profile } from "../../../assets"
import { HapusModal, HeaderAdmin, TableAdmin } from "../../../components"
import { styles } from "../../../constant"
import api from "../../../controller/adminController"

const DataPenguji = () => {
  const [data, setData] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [idHapus, setIdHapus] = useState(null)

  useEffect(() => {
    api.getPenguji()
      .then((res) => {
        console.log(res)
        setData(res);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleModal = (id) => {
    setOpenModal(true)
    console.log(id)
    setIdHapus(id)
  }

  const handlerHapus = () => {
    console.log(`menghapus penguji id ${idHapus}`)
    api.deletePenguji(idHapus)
      .then(() => {
        api.getPenguji()
          .then((res) => {
            console.log(res)
            setData(res);
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err)=>{
        console.log(err)
      })
    setOpenModal(false)
  }

  // const dataPenguji = {
  //   data: [],
  //   page: "1",
  //   last_page: "5",
  //   pagination_prev: true,
  //   pagination_next: false
  // }
  return (
    <>
      <HapusModal open={openModal} onClose={() => setOpenModal(false)} handlerHapus={handlerHapus} />
      <div className={`${styles.adminStyle}`}>
        <HeaderAdmin title="Data Penguji" name="Muhammad Harsin" icon={Profile} />
        {data && <TableAdmin title="Tabel Penguji" res={data} handleModal={handleModal} />}
      </div>
    </>
  )
}

export default DataPenguji