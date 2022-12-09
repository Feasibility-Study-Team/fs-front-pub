import { useContext } from "react"
import { Link } from "react-router-dom"
import { Alat1 } from "../../../../assets"
// import { StatusImg } from "../../../../assets"
import { colorText } from "../../../../constant/formatter"
import { UserContext } from "../../../../context/User"



const InventorFeasibilityStatus = () => {
    const {user} = useContext(UserContext)
    return (
        <div className="w-full py-6 px-10 flex flex-col gap-16">
            <h1 className="font-semibold text-4xl text-cardtext">Feasibility Test Status</h1>
            <div className="flex flex-row gap-8 flex-wrap justify-start items-start">
                {user?.alat && user?.alat.map((item, index) => (
                    <>
                        {item?.uji && item?.uji?.map((uji, index) => (
                            <Link to={uji.id} key={index}>
                                <div className="bg-card rounded-lg w-[350px] h-[250px] flex flex-col">
                                    <img src={item?.img || Alat1} alt="alat" className="w-full h-28 object-cover object-center rounded-lg" />
                                    <div className="flex flex-col gap-2 p-5">
                                        <h2 className="font-bold text-cardtext text-2xl">
                                            {item.nama_alat}
                                        </h2>
                                        <p className={`${colorText(uji?.Status || "Pending")} font-medium text-base`}>
                                            {uji?.Status || "Dokumen belum ada"}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </>
                ))}
            </div>
        </div>
    )
}

export default InventorFeasibilityStatus