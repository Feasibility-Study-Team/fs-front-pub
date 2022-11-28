import { Link, Outlet } from "react-router-dom"
import { styles } from "../../../../constant"
import { IoChevronBackOutline } from "react-icons/io5"

const LayoutProject = ({ title }) => {
    return (
        <div className="w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter}`}>
                <div className={`${styles.boxContent} flex flex-col`}>
                    <Link to="/inventor/project" className="flex flex-row items-center gap-2 font-semibold text-[#1C768F] text-3xl">
                        <IoChevronBackOutline size={46} />
                        Back
                    </Link>
                    <div className="pt-20 pb-16">
                        <h1 className="font-semibold text-cardtext text-5xl">{title}</h1>
                    </div>
                    <div className="flex flex-row gap-14">
                        <div>
                            
                        </div>
                        <div>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LayoutProject