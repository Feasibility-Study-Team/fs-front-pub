import { useEffect, useState } from "react"
import { useOutletContext, useParams } from "react-router-dom"
import { DataParameter } from "../../../../components"
import api from "../../../../controller/inventorController"

const InventorAspek = () => {
    const { aspek, alat } = useParams()
    const [data, setData] = useState()
    const { dtoken } = useOutletContext()

    useEffect(() => {
        api.getAspekId(aspek)
            .then((res) => {
                console.log('aspek', res)
                setData(res?.data?.parameter)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [aspek])
    
    return (
        <div className="w-full bg-placeholder rounded-lg p-12">
            {console.log('dtoken', dtoken)}
            {data ?
                // form
                <div className="flex flex-col gap-7">
                    {data.map((parameter, index) => (
                        <div key={index} className="flex flex-col gap-4">
                            <h2 className="font-medium text-cardtext text-xl">{parameter?.nama}</h2>
                            {parameter?.data && parameter?.data.map((item, index) => (
                                <DataParameter key={index} id_alat={alat} id_data={item?.id_data} tipe={item?.tipe} title={item?.nama} />
                            ))}
                        </div>
                    ))}

                </div>
                : <p>Tidak ada data</p>}


        </div>
    )
}

export default InventorAspek