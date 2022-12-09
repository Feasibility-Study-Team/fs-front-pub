import { useEffect, useState } from "react"
import { pdfIcon } from "../../assets"
import api from "../../controller/inventorController"

const DataPenguji = ({ id_data, id_alat, title }) => {
    const [temp, setTemp] = useState([])
    useEffect(() => {
        api.getTempUser(id_alat, id_data)
            .then((res) => {
                setTemp(res?.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id_alat, id_data])
    return (
        <div className="flex flex-col gap-2">
            <h3 className="font-normal text-cardtext text-base">{title}</h3>
            {temp && temp.map((item, index) => (
                <div key={index}>
                    {item?.type && item?.type === "text" ?
                        <div className="border-2 w-full p-2 rounded-lg"><p>{item?.value}</p></div>
                        :
                        <a target="blank" href={item?.value}>
                            <button className="flex flex-col gap-2 items-center justify-center p-8 border-2 border-cardtext border-dashed rounded-lg cursor-pointer hover:bg-gray-200 bg-white text-[#315BFF]">
                                <img src={pdfIcon} alt="pdf" />
                                Download pdf
                            </button>
                        </a>
                    }
                </div>
            ))}
            {temp?.length < 1 && <div className="border-2 w-full p-2 rounded-lg text-greyuser">Dokumen belum di upload</div>}
        </div>
    )
}

export default DataPenguji