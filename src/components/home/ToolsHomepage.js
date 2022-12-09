import { Link } from "react-router-dom"
import { styles } from "../../constant"

const ToolsHomepage = ({ title, desc, img }) => {
    return (
        <>
            <div className="absolute bgCardMagenta h-24 w-24 top-16 left-6 rounded-full">
            </div>
            <div className={`w-full ${styles.paddingX} ${styles.flexCenter} mb-16`}>
                <div className={`${styles.boxContent} relative z-10`}>
                    <h2 className="max-w-[500px] font-bold text-5xl text-white">{title}</h2>
                </div>
            </div>
            <div className="w-full relative">
                <div className="h-full w-1/3 bgCardMagenta absolute rounded-r-xl">

                </div>
                <div className={`w-full ${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxContent} flex lg:flex-row flex-col flex-wrap py-6 relative z-10 gap-16`}>
                        <div className="flex-1">
                            <img src={img} alt="tools" className="lg:w-[667px] w-full rounded-xl" />
                        </div>
                        <div className="flex-1 flex flex-col gap-8 justify-center">
                            <p className="font-medium text-3xl text-white">{desc}</p>
                            <Link to="/inventor/project/">
                                <button className={styles.btnStyle1}>Test Now!</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ToolsHomepage