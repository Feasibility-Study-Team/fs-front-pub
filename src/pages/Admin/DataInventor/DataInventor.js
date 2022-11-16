import { useEffect, useState } from "react"
import { Profile } from "../../../assets"
import { HapusModal, HeaderAdmin, TableAdmin } from "../../../components"
import { styles } from "../../../constant"
import api from "../../../controller/adminController"

const DataInventor = () => {
  const [data, setData] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [idHapus, setIdHapus] = useState(null)

  useEffect(() => {
    api.getInventor()
      .then((res) => {
        console.log(res)
        setData(res)
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
    console.log(`menghapus id ${idHapus}`)
    api.deleteInventor(idHapus)
      .then(() => {
        api.getInventor()
          .then((res) => {
            console.log(res)
            setData(res)
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

  // const dataInventor = {
  //     data: [],
  //     page: "1",
  //     last_page: "5",
  //     pagination_prev: true,
  //     pagination_next: false
  //   }
  return (
    <>
      <HapusModal open={openModal} onClose={() => setOpenModal(false)} handlerHapus={handlerHapus} />
      <div className={`${styles.adminStyle}`}>
        <HeaderAdmin title="Data Inventor" name="Muhammad Harsin" icon={Profile} />
        {data && <TableAdmin title="Tabel Inventor" res={data} handleModal={handleModal} />}
      </div>
    </>
  )
}

export default DataInventor