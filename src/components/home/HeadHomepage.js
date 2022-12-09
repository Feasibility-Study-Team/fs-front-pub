import { Link } from "react-router-dom"
import { HeadBg } from "../../assets"
import { styles } from "../../constant"

const HeadHomepage = ({ title, desc }) => {
    return (
        <div className={`${styles.boxContent} flex`}>
            <div className="flex flex-col gap-12 basis-1/2 py-20">
                <h1 className="font-bold text-7xl text-cardtext">{title}</h1>
                <p className="text-greyuser text-lg">{desc}</p>
                <Link to="/inventor/project/">
                    <button className={styles.btnStyle1}>Test Now!</button>
                </Link>
            </div>
            <div className="relative mb-20">
                <img src={HeadBg} alt="headbg" className="h-[560px]" />
                <div className="absolute top-36">
                    <div className={`${styles.gradientbg2} top-5 left-64 absolute`}>
                    </div>
                    <div className={`${styles.gradientbg1} top-32 left-52 absolute`}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadHomepage