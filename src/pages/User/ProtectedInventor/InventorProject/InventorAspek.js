import { useEffect, useState } from "react"
import { IoCloudUploadOutline } from "react-icons/io5"
import { useOutletContext, useParams } from "react-router-dom"
import api from "../../../../controller/inventorController"

const InventorAspek = () => {
    const { aspek, alat } = useParams()
    const [data, setData] = useState()
    const { dtoken } = useOutletContext()

    const [push, setPush] = useState([{
        id_alat: "",
        id_data: "",
        type: "",
        value: ""
    }])

    const changeParent = (e, id_data, alat, type) => {
        const value = e.target.value
        setPush([{
            id_alat: alat,
            id_data: id_data,
            type: type,
            value: value
        }])
    }

    const handlerPush = () => {
        console.log(push[0])
        api.createTemp(push[0])
            .then((res)=>{
                console.log(res)
                setPush([{
                    id_alat: "",
                    id_data: "",
                    type: "",
                    value: ""
                }])
            })
            .catch((err)=>{
                console.log(err)
            })
    }

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
                                <div className="flex flex-col gap-2" key={index}>
                                    <h3 className="font-normal text-cardtext text-base">{item?.nama}</h3>
                                    {item?.tipe && item?.tipe === "text" ?
                                        <textarea type="text" className="h-32 border-2" onChange={(e) => changeParent(e, item?.id_data, alat, item?.tipe)} value={push[0].value}></textarea>
                                        :
                                        <label htmlFor="drop-file" className="flex flex-col gap-5 items-center justify-center w-full p-9 border-2 border-cardtext border-dashed rounded-lg cursor-pointer hover:bg-gray-200 bg-white text-[#315BFF]">
                                            <IoCloudUploadOutline size={60} />
                                            <div className="flex flex-col items-center justify-center gap-2">
                                                <p className="font-medium text-base text-cardtext text-center">Drag & drop files or <span className="text-bluebar underline">Browse</span></p>
                                                <p className="text-gray-400 text-xs text-center">Supported formates: PDF</p>
                                            </div>
                                            <input id="drop-file" type="file" className="hidden" />
                                        </label>
                                    }
                                    <button onClick={handlerPush}>Save</button>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                : <p>Tidak ada data</p>}


        </div>
    )
}

export default InventorAspek