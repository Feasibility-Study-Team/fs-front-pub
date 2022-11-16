import { useOutletContext } from "react-router-dom"

const DetailDataAlat = () => {
  const data = useOutletContext()

  const detailStyle = {
    headingText: "font-medium text-xl text-cardtext",
    descText: "font-medium text-2xl text-detailtext"
  }
  return (

    <div className="w-full bg-card rounded-lg p-6 shadow-md flex flex-col gap-6">
      <div className="w-full border-b-2 pb-6 font-semibold text-cardtext text-2xl">
        <h2>Data Alat</h2>
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <h3 className={detailStyle.headingText}>Nama Alat</h3>
          <p className={detailStyle.descText}>{data?.nama_alat}</p>
        </div>
        <div>
          <h3 className={detailStyle.headingText}>Nama Inventor</h3>
          <p className={detailStyle.descText}>{data?.nama_inventor || "-"}</p>
        </div>
        <div>
          <h3 className={detailStyle.headingText}>Instansi</h3>
          <p className={detailStyle.descText}>{data?.instansi || "-"}</p>
        </div>
        <div>
          <h3 className={detailStyle.headingText}>Deskripsi Alat</h3>
          <p className={detailStyle.descText}>{data?.deskripsi_alat}</p>
        </div>
        <div>
          <h3 className={detailStyle.headingText}>Spesifikasi Alat</h3>
          <p className={detailStyle.descText}>{data?.spesifikasi || "-"}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailDataAlat