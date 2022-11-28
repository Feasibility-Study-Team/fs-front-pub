import { Link, useOutletContext } from "react-router-dom"
// import { StatusImg } from "../../../../assets"
import { colorText } from "../../../../constant/formatter"



const InventorFeasibilityStatus = () => {
    const data = useOutletContext()
    // const dataAlat = [
    //     {
    //         id: "aasdsd-1",
    //         img: StatusImg,
    //         title: "Lawn Mower",
    //         status: "Pending",
    //     },
    //     {
    //         id: "aasdsd-2",
    //         img: StatusImg,
    //         title: "Portable Laminar Air Flow",
    //         status: "Under Review",
    //     },
    //     {
    //         id: "aasdsd-3",
    //         img: StatusImg,
    //         title: "Hepa Filter",
    //         status: "Done! Check the Report",
    //     }
    // ]

    return (
        <div className="w-full py-6 px-10 flex flex-col gap-16">
            <h1 className="font-semibold text-4xl text-cardtext">Feasibility Test Status</h1>
            <div className="flex flex-row flex-wrap gap-20">
                {data?.alat && data?.alat.map((item, index) => (
                    <Link to={item.id} key={index}>
                        <div className="bg-card rounded-lg w-[350px] h-[250px] flex flex-col">
                            <img src={item?.img} alt="alat" className="w-full h-28 object-cover object-center rounded-lg" />
                            <div className="flex flex-col gap-2 p-5">
                                <h2 className="font-bold text-cardtext text-2xl">
                                    {item.title}
                                </h2>
                                <p className={`${colorText(item.status)} font-medium text-base`}>
                                    {item.status}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default InventorFeasibilityStatus