import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import { Link } from "react-router-dom"

const TableUji = ({res, title}) => {
    return (
        <div className="mt-10 shadow-md overflow-x-auto rounded-lg">
            <h2 className="p-6 w-full font-bold text-xl bg-white">{title}</h2>
            <table className="w-full text-sm text-left">
                <thead className="text-sm text-tablehead bg-white border-b-4 border-tablehover">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Nama Alat
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Nama Penguji
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Nilai
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Status
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Opsi
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {res?.data && res?.data.map((item, index) => (
                        <tr className="bg-white hover:bg-tablehover font-semibold text-admintext border-b border-tablehover" key={index}>
                            <th scope="row" className="py-4 px-6 font-semibold">
                                {item?.alat?.nama_alat}
                            </th>
                            <td className="py-4 px-6">
                                {item?.inventor?.nama_lengkap || "-"}
                            </td>
                            <td className="py-4 px-6">
                                {item?.nilai || "0"}
                            </td>
                            <td className="py-4 px-6">
                                {item?.Status || "-"}
                            </td>
                            <td className="py-4 px-6">
                                <Link to={`${item?.id}`}><button className="h-8 w-32 rounded-full bg-[#EA760B] hover:bg-tablehover hover:border-[#EA760B] hover:border-2 hover:text-[#EA760B] text-white uppercase">Lihat Detail</button></Link>
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
            </div>
        </div>
    )
}

export default TableUji