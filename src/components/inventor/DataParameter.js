import { useEffect, useState } from "react"
import { IoCloudUploadOutline } from "react-icons/io5"
import { pdfIcon } from "../../assets"
import { styles } from "../../constant"
import api from "../../controller/inventorController"

const DataParameter = ({ tipe, id_data, id_alat, title }) => {
    const [value, setValue] = useState(null)
    const [temp, setTemp] = useState([])

    useEffect(() => {
        api.getTempUser(id_alat, id_data)
            .then((res) => {
                setTemp(res?.data)
                console.log("test")
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id_alat, id_data])
    const handlerCreate = () => {
        const formData = new FormData()
        formData.append('id_data', id_data)
        formData.append('id_alat', id_alat)
        formData.append('type', tipe)
        formData.append('value', value)

        api.createTemp(formData)
            .then((res) => {
                api.getTempUser(id_alat, id_data)
                    .then((res) => {
                        setTemp(res?.data)
                        console.log("test")
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="flex flex-col gap-2">
            <h3 className="font-normal text-cardtext text-base">{title}</h3>
            {temp && temp.map((item, index) => (
                <div key={index}>
                    {item?.type && item?.type === "text" ?
                        <textarea type="text" disabled className="h-32 border-2 w-full" value={item?.value}></textarea>
                        :
                        <a target="blank" href={item?.value} className="flex flex-col gap-5 items-center justify-center w-32 p-9 border-2 border-cardtext border-dashed rounded-lg cursor-pointer hover:bg-gray-200 bg-white text-[#315BFF]">
                            <img src={pdfIcon} alt="doc" />
                            <div className="flex flex-col items-center justify-center gap-2">
                                <p className="font-medium text-base text-cardtext text-center">Download files</p>
                            </div>
                        </a>
                    }
                </div>
            ))}
            {temp.length < 1 &&
                <div className="flex flex-col gap-2">
                    {tipe && tipe === "text" ?
                        <textarea type="text" className="h-32 border-2" onChange={(e) => setValue(e.target.value)}></textarea>
                        :
                        <label htmlFor="drop-file" className="flex flex-col gap-5 items-center justify-center w-full p-9 border-2 border-cardtext border-dashed rounded-lg cursor-pointer hover:bg-gray-200 bg-white text-[#315BFF]">
                            {value ?
                                <>
                                <img src={pdfIcon} alt="pdf" className="w-16"/>
                                <p className="text-gray-400 text-xs text-center">{value?.name}</p>
                                </>
                                :
                                <>
                                    <IoCloudUploadOutline size={60} />
                                    <div className="flex flex-col items-center justify-center gap-2">
                                        <p className="font-medium text-base text-cardtext text-center">Drag & drop files or <span className="text-bluebar underline">Browse</span></p>
                                        <p className="text-gray-400 text-xs text-center">Supported formates: PDF</p>
                                    </div>
                                </>
                            }
                            <input id="drop-file" type="file" className="hidden" onChange={(e) => setValue(e.target.files[0])} />
                        </label>
                    }
                    <div>
                        <button className={styles.btnStyle1} onClick={handlerCreate} >Save</button>
                    </div>
                </div>}

        </div>
    )
}

export default DataParameter