import { Profile } from "../../../assets"
import { HeaderAdmin, TableAlat } from "../../../components"
import { styles } from "../../../constant"

const DataAlat = () => {
    const dataAlat = {
        data: [
          {
            id: 1,
            icon: Profile,
            nama_alat: "Alat Pemipil Jagung Otomatis",
            nama_inventor: "Tom Cruise",
            instansi: "PT Intan Setiawan",
          },
          {
            id: 2,
            icon: Profile,
            nama_alat: "Alat Pendeteksi Gempa",
            nama_inventor: "Angelina Jolie",
            instansi: "Harvard University",
          },
          {
            id: 3,
            icon: Profile,
            nama_alat: "Vacum Cleaner botol",
            nama_inventor: "Ernesto william xavier",
            instansi: "Petroleum University",
          },
          {
            id: 4,
            icon: Profile,
            nama_alat: "Alat Pemipil Jagung Otomatis",
            nama_inventor: "Tom Cruise",
            instansi: "PT Intan Setiawan",
          },
          {
            id: 5,
            icon: Profile,
            nama_alat: "Alat Pemipil Jagung Otomatis",
            nama_inventor: "Tom Cruise",
            instansi: "PT Intan Setiawan",
          }
        ],
        page: "1",
        last_page: "5",
        pagination_prev: true,
        pagination_next: false
      }
    return (
        <div className={styles.adminStyle}>
            <HeaderAdmin title="Data Alat" name="Muhammad Harsin" icon={Profile}/>
            <TableAlat res={dataAlat} title="Data Alat"/>
        </div>
    )
}

export default DataAlat