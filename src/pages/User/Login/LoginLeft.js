import { Alat1 } from "../../../assets"
import { styles } from "../../../constant"

const LoginLeft = () => {
    return (
        <div className={`${styles.paddingX} ${styles.flexCenter} sm:py-28 py-16 flex-col`}>
            <h1 className="font-bold text-black text-4xl text-center">Feasibility Study Framework</h1>
            <img src={Alat1} alt="Alat" className="rounded-lg my-16 w-full" />
            <p className="font-medium text-lg">For industrial needs, We provide appropriate technology machines that have been tested for feasibility. We also provide services to analyze the feasibility study of your product.</p>
        </div>
    )
}

export default LoginLeft