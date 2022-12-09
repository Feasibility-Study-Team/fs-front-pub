import { BsPlusSquareFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { Alat1 } from "../../assets"
import { styles } from "../../constant"
// import { rupiahFormatter } from "../../constant/formatter"

const AllProduct = ({ data }) => {
    return (
        <div className={`${styles.boxContent} flex flex-col gap-16`}>
            <div>
                <h1 className="font-bold text-5xl text-center text-cardtext">Our Products</h1>
            </div>
            <div className="flex flex-row flex-wrap sm:gap-8 gap-2">
                {data && data.map((item, index) => (
                    <div className="md:w-72 w-64 border-2 border-[#1C768F] rounded-3xl p-4 flex flex-col items-center gap-2 bg-white" key={index}>
                        <img src={item?.photo_alat[0]?.photo || Alat1} alt={item?.nama_alat} className="h-40 w-full object-cover object-center rounded-lg" />
                        <div className="w-full">
                            <h3 className="h-16 text-lg font-medium">{item?.nama_alat}</h3>
                            {/* <Rating rating={item?.rating} /> */}
                        </div>
                        <div className="w-full flex flex-row items-center justify-between">
                            <p className="font-bold text-2xl">Hubungi Marketing</p>
                            <Link to={`/product/${item?.id_alat}`}>
                                <button>
                                    <BsPlusSquareFill size={45} />
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default AllProduct