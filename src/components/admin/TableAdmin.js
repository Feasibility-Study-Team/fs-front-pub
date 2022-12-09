import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import { Link } from "react-router-dom"
import { profileDefault } from "../../assets"

const TableAdmin = ({ res, title, handleModal, handleUpdate, titleUpdate }) => {
    return (
        <>
            <div className="mt-10 shadow-md overflow-x-auto rounded-lg">
                <h2 className="p-6 w-full font-bold text-xl bg-white">{title}</h2>
                <table className="w-full text-sm text-left">
                    <thead className="text-sm text-tablehead bg-white border-b-4 border-tablehover">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Username
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Nama Lengkap
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Email
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Instansi
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Nomor telepon
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Opsi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {res?.data && res?.data.map((item, index) => (
                            <tr className="bg-white hover:bg-tablehover font-semibold text-admintext border-b border-tablehover" key={index}>
                                <th scope="row" className="py-4 px-6">
                                    <div className="flex items-center gap-2 font-semibold">
                                        <img src={item?.photo || profileDefault} alt="profile" className="w-10 h-10 rounded-full" />
                                        {item?.username}
                                    </div>
                                </th>
                                <td className="py-4 px-6">
                                    {item?.nama_lengkap}
                                </td>
                                <td className="py-4 px-6">
                                    {item?.email}
                                </td>
                                <td className="py-4 px-6">
                                    {item?.institusi?.nama_institusi}
                                </td>
                                <td className="py-4 px-6">
                                    {item?.nomor}
                                </td>
                                <td className="py-4 px-6">
                                    <div className="flex flex-col gap-1 item">
                                        <div className="flex gap-1">
                                            <Link to={`${item?.id_penguji || item?.id_inventor}`}><button className="h-8 w-16 rounded-full bg-[#3751FF] hover:bg-tablehover hover:border-[#3751FF] hover:border-2 hover:text-[#3751FF] text-white uppercase">Edit</button></Link>
                                            <button onClick={() => handleModal(item?.id_penguji || item?.id_inventor)} className="h-8 w-16 rounded-full bg-[#F12B2C] hover:bg-tablehover hover:border-[#F12B2C] hover:border-2 hover:text-[#F12B2C] text-white uppercase">Hapus</button>
                                        </div>

                                        <button onClick={() => handleUpdate(item?.id_penguji || item?.id_inventor)} className="h-8 w-32 rounded-full bg-green-700 hover:bg-tablehover hover:border-green-700 hover:border-2 hover:text-green-700 text-white uppercase">{titleUpdate}</button>
                                    </div>
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
        </>

    )
}

export default TableAdmin