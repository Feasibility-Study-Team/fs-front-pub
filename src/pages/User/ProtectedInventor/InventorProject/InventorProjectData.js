import { Link } from "react-router-dom"
import { GrFormNext } from "react-icons/gr"
import { AiFillPlusCircle } from "react-icons/ai"

const InventorProjectData = () => {
    const dataAlat = [
        {
            id: "aasdsd-1",
            title: "Lawn Mower",
        },
        {
            id: "aasdsd-2",
            title: "Portable Laminar Air Flow",
        },
        {
            id: "aasdsd-3",
            title: "Hepa Filter",
        }
    ]
    return (
        <div className="w-full py-6 px-10 flex flex-col gap-14">
            <h1 className="font-semibold text-4xl text-cardtext">Project Data</h1>
            <div className="w-full flex flex-col gap-6">
                {dataAlat && dataAlat.map((item, index) => (
                    <Link to={item.id}>
                        <div key={index} className="bg-card rounded-lg w-full flex flex-col px-10 py-5">
                            <div className="w-full flex justify-between items-center">
                                <h2 className="font-semibold text-cardtext text-xl">
                                    {item.title}
                                </h2>
                                <GrFormNext size={20} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <h2 className="font-semibold text-4xl text-cardtext mt-5">New Project</h2>
            <Link to="new-project" className="w-full rounded-lg border-2 border-dashed border-cardtext p-5 flex justify-center">
                <div className="flex gap-2 items-center">
                    <AiFillPlusCircle size={25}/>
                    <p className="font-medium text-lg">Make a new project</p>
                </div>
            </Link>
        </div>
    )
}

export default InventorProjectData