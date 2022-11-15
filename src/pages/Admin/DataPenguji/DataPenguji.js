import { Profile } from "../../../assets"
import { HeaderAdmin, TableAdmin } from "../../../components"
import { styles } from "../../../constant"

const DataPenguji = () => {
  const dataPenguji = {
    data: [
      {
        id: 1,
        icon: Profile,
        username: "Cruise.Tom",
        nama_lengkap: "Tom Cruise",
        email: "tomcruise123@gmail.com",
        institusi: "PT Intan Setiawan",
        phone_number: "089123453617",
      },
      {
        id: 2,
        icon: Profile,
        username: "AngelinaJolie123",
        nama_lengkap: "Angelina Jolie",
        email: "jolieangeline123@gmail.com",
        institusi: "Harvard University",
        phone_number: "085623453617",
      },
      {
        id: 3,
        icon: Profile,
        username: "Owen.Hargeves",
        nama_lengkap: "Owen Hargeves Yurinko",
        email: "owenowen453@gmail.com",
        institusi: "Petroleum University",
        phone_number: "085623453617",
      },
      {
        id: 4,
        icon: Profile,
        username: "Ernestowilliam44",
        nama_lengkap: "Ernesto William Xavier",
        email: "ernesto123@gmail.com",
        institusi: "Petroleum University",
        phone_number: "085623453617",
      },
      {
        id: 5,
        icon: Profile,
        username: "Wir.ahmad",
        nama_lengkap: "Ahmad Nawir",
        email: "wirnawir123@yahoo.com",
        institusi: "UPN Veteran Yogyakarta",
        phone_number: "0877623453617",
      }
    ],
    page: "1",
    last_page: "5",
    pagination_prev: true,
    pagination_next: false
  }
  return (
    <div className={`${styles.adminStyle}`}>
      <HeaderAdmin title="Data Penguji" name="Muhammad Harsin" icon={Profile} />
      <TableAdmin title="Tabel Penguji" res={dataPenguji} />
    </div>
  )
}

export default DataPenguji