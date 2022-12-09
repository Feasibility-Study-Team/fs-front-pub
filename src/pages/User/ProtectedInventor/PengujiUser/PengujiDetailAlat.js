import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { lawnmowerImg } from "../../../../assets"
import { DescriptionDown, HeadAlat } from "../../../../components"
import { UjiContext } from "../../../../context/Uji"
import api from "../../../../controller/ujiController"

const PengujiDetailAlat = () => {
    const [alat, setAlat] = useState(null)
    const { id } = useParams()
    const { setIdAlat, setIdUji } = useContext(UjiContext)

    useEffect(() => {
        api.getUjiId(id)
            .then((res) => {
                console.log(res)
                setAlat(res?.data?.alat)
                setIdAlat(res?.data?.alat?.id_alat)
                setIdUji(id)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id, setIdAlat, setIdUji])
    return (
        <div className="w-full bg-placeholder rounded-lg p-12 flex flex-col gap-12">
            <div>
                <HeadAlat
                    desc={""}
                    category="Teknologi Tepat Guna"
                    name={alat?.nama_alat}
                    img={alat?.photo_alat[0]?.photo || lawnmowerImg}
                />
            </div>
            <div>
                <DescriptionDown desc={alat?.deskripsi_alat} title="Description" border="border-t-2" />
                <DescriptionDown desc={alat?.spesifikasi_alat} title="Specification" />
            </div>
        </div>
    )
}

export default PengujiDetailAlat