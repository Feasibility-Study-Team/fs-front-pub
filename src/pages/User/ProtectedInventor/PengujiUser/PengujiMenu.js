import { useContext } from "react"
import { Link } from "react-router-dom"
import { Alat1 } from "../../../../assets"
import { Loading } from "../../../../components"
import { colorText } from "../../../../constant/formatter"
import { UjiContext } from "../../../../context/Uji"

const PengujiMenu = () => {
    const { uji,loading } = useContext(UjiContext)
    return (
        <>
            {loading && <Loading height="w-full"/>}
            {!loading && 
            <div className="w-full py-6 px-10 flex flex-col gap-16">
                <h1 className="font-semibold text-4xl text-cardtext">Menu Pengujian</h1>
                <div className="flex flex-row flex-wrap gap-8">
                    {console.log("ujii", uji)}
                    {uji && uji?.map((item, index) => (
                        <Link to={item?.id} key={index}>
                            <div className="bg-card rounded-lg w-[350px] h-[250px] flex flex-col">
                                <img src={item?.alat?.photo_alat[0]?.photo || Alat1} alt="alat" className="w-full h-28 object-cover object-center rounded-lg" />
                                <div className="flex flex-col gap-2 p-5">
                                    <h2 className="font-bold text-cardtext text-2xl">
                                        {item?.alat?.nama_alat}
                                    </h2>
                                    <p className={`${colorText(item?.Status || "Pending")} font-medium text-base`}>
                                        {item?.Status || "Pending"}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>}

        </>

    )
}

export default PengujiMenu