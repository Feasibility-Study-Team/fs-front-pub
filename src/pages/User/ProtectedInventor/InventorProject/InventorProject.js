import { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom"
import { lawnmowerImg } from "../../../../assets"
import { DescriptionDown, HeadAlat } from "../../../../components"
import api from "../../../../controller/inventorController"

const InventorProject = () => {
  const { alat } = useOutletContext()
  const [data, setData] = useState(null)

  useEffect(() => {
    api.getAlatId(alat)
      .then((res) => {
        console.log("data alat", res)
        setData(res?.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [alat])

  return (
    <div className="w-full bg-placeholder rounded-lg p-12 flex flex-col gap-12">
      <div>
        <HeadAlat
          desc={""}
          category="Teknologi Tepat Guna"
          name={data?.nama_alat}
          img={data?.photo_alat[0] || lawnmowerImg}
        />
      </div>
      <div>
        <DescriptionDown desc={data?.deskripsi_alat} title="Description" border="border-t-2" />
        <DescriptionDown desc={data?.deskripsi_alat} title="Specification" />
      </div>
      {console.log('alat', alat)}

    </div>
  )
}

export default InventorProject