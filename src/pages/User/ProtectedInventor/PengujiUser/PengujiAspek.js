import { useContext } from "react"
import { useParams } from "react-router-dom"
import { DataPenguji } from "../../../../components"
import { UjiContext } from "../../../../context/Uji"

const PengujiAspek = () => {
    const { aspek, idAlat } = useContext(UjiContext)
    const { aspekP} = useParams()
    return (
        <div className="w-full bg-placeholder rounded-lg p-12 flex flex-col gap-7">
            {aspek && aspek.map((aspek, index)=>(
                <div key={index}>
                    {aspek?.id_aspek === aspekP && aspek?.parameter && aspek?.parameter.map((parameter, index)=>(
                        <div className="flex flex-col gap-4" key={index}>
                             <h2 className="font-medium text-cardtext text-xl">{parameter?.nama}</h2>
                             {parameter?.data && parameter?.data.map((item, index) => (
                                <DataPenguji key={index} title={item?.nama} id_data={item?.id_data} id_alat={idAlat} />
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default PengujiAspek