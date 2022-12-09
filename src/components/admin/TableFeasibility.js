import { useState } from "react"
import { Link } from "react-router-dom"

const TableFeasibility = ({ res, title }) => {
    const [showAspek, setShowAspek] = useState(null)
    const [showParam, setShowParam] = useState(null)
    return (
        <div className="mt-4 shadow-md overflow-x-auto rounded-lg">
            <h2 className="p-6 w-full font-bold text-xl bg-white">{title}</h2>
            <div>
                {res && res.map((aspek, index) => (
                    <>
                        <div
                            key={index}
                            className="bg-white py-3 px-6 border-t-2 cursor-pointer flex flex-col gap-2"
                        >
                            <div onClick={() => setShowAspek(index === showAspek ? null : index)} className="w-full flex flex-row justify-between">
                                <p>{aspek.nama}</p>
                                <Link to={`edit/aspek/${aspek.id_aspek}`} className="flex items-center justify-center h-8 w-32 rounded-full bg-[#EA760B] hover:bg-white hover:border-[#EA760B] hover:border-2 hover:text-[#EA760B] text-white">Edit Aspek</Link>
                            </div>
                            {showAspek === index && aspek.parameter && aspek.parameter.map((parameter, index) => (
                                <>
                                    <div
                                        key={index}
                                        className="cursor-pointer pl-2"
                                    >
                                        <div onClick={() => setShowParam(index === showParam ? null : index)} className="w-full flex flex-row justify-between">
                                            <p>{parameter.nama}</p>
                                            <Link to={`edit/parameter/${parameter.id_parameter}`} className="flex items-center justify-center h-8 w-32 rounded-full bg-[#EA760B] hover:bg-white hover:border-[#EA760B] hover:border-2 hover:text-[#EA760B] text-white">Edit Parameter</Link>
                                        </div>
                                    </div>
                                    <div>
                                        {showParam === index && parameter.data && parameter.data.map((data, index) => (
                                            <div
                                                key={index}
                                                className="pl-4"
                                            >
                                                <div className="w-full flex flex-row justify-between">
                                                    <p>{data.nama}</p>
                                                    <Link to={`edit/parameter/${data.id_parameter}`} className="flex items-center justify-center h-8 w-32 rounded-full bg-[#EA760B] hover:bg-white hover:border-[#EA760B] hover:border-2 hover:text-[#EA760B] text-white">Edit Data</Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            ))}
                        </div>
                    </>
                ))}
            </div>
            {/* <table className="w-full text-sm text-left">
                <thead className="text-sm text-tablehead bg-white border-b-4 border-tablehover">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Nama
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Alamat
                        </th>
                        <th scope="col" className="py-3 px-6">
                            No Telp
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Opsi
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {res?.data && res?.data.map((item, index) => (
                        <tr className="bg-white hover:bg-tablehover font-semibold text-admintext border-b border-tablehover" key={index}>
                            <th scope="row" className="py-4 px-6 flex items-center gap-2 font-semibold">
                                <img src={item?.gambar_alat || profileDefault} alt="profile" className="w-10 h-10 rounded-full" />
                                {item?.nama_alat}
                            </th>
                            <td className="py-4 px-6">
                                {item?.id_inventor}
                            </td>
                            <td className="py-4 px-6">
                                {item?.instansi}
                            </td>
                            <td className="py-4 px-6">
                                <Link to={`${item?.id_alat}`}><button className="h-8 w-32 rounded-full bg-[#EA760B] hover:bg-tablehover hover:border-[#EA760B] hover:border-2 hover:text-[#EA760B] text-white uppercase">Lihat Detail</button></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="p-6 bg-white w-full flex justify-end gap-6 items-center">
                <div>
                    {res?.page}-{res?.last_page}
                </div>
                <div className="flex items-center gap-1">
                    <button disabled={res?.pagination_prev} className={`${res?.pagination_prev ? 'opacity-50' : 'opacity-100'}`}><GrFormPrevious size={24} /></button>
                    <button disabled={res?.pagination_next} className={`${res?.pagination_next ? 'opacity-50' : 'opacity-100'}`}><GrFormNext size={24} /></button>
                </div>
            </div> */}
        </div>
    )
}

export default TableFeasibility