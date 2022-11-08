import { Gmail } from "../../assets"
import { styles } from "../../constant"

const LoginRight = () => {
    const loginStyle = {
        inputStyle: "border-2 border-iris100 rounded-[10px] text-[16px] py-1.5 px-4 w-[250px] max-h-[38px]"
    }
    return (
        <div className={`${styles.paddingX} ${styles.flexCenter} py-28 flex-col`}>
            <h1 className="font-bold text-black text-4xl">LOGIN</h1>
            <div className={`${styles.flexCenter} flex-col my-16`}>
                <form className={`${styles.flexCenter} flex-col`}>
                    <input type="text" placeholder="username" className={`${loginStyle.inputStyle} mb-[20px]`} />
                    <input type="password" placeholder="password" className={`${loginStyle.inputStyle} mb-[20px]`} />
                    <button className={`${styles.btnStyle1} my-8`}>Login</button>
                </form>
                <div className="flex flex-row gap-2">
                    <span>-</span><span>OR</span><span>-</span>
                </div>
                <div>
                    <img src={Gmail} alt="gmail"/>
                </div>
            </div>

        </div>
    )
}

export default LoginRight 