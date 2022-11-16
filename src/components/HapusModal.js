import { MdClose } from "react-icons/md"
import { Warning } from "../assets"

const HapusModal = ({ open, onClose, handlerHapus }) => {
    if (!open) return null

    return (
        <div onClick={onClose} className="bg-black bg-opacity-50 fixed w-screen h-screen top-0 left-0 overflow-hidden flex items-center justify-center p-16 ease-in-out duration-300">
            <div className="max-w-xl bg-white rounded-lg flex flex-col p-6 items-center gap-6 text-center">
                <div className="w-full flex justify-end">
                    <button onClick={onClose}><MdClose size={20} /></button>
                </div>
                <img src={Warning} alt="warning" className="w-32" />
                <h2 className="font-bold text-2xl">Apakah Anda Yakin?</h2>
                <p className="font-medium text-lg text-gray-700">Ketika anda Menghapus data ini maka data akan terhapus selamanya dari sistem</p>
                <div className="flex gap-3">
                    <button onClick={onClose} className="h-10 w-32 rounded-full bg-[#3751FF] hover:bg-white hover:border-[#3751FF] hover:border-2 hover:text-[#3751FF] text-white">Batalkan</button>
                    <button onClick={handlerHapus}className="h-10 w-32 rounded-full bg-[#F12B2C] hover:bg-white hover:border-[#F12B2C] hover:border-2 hover:text-[#F12B2C] text-white">Hapus</button>
                </div>
            </div>
        </div>
    )
}

export default HapusModal