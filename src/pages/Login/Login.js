import { styles } from "../../constant"
import LoginLeft from "./LoginLeft"
import LoginRight from "./LoginRight"

const Login = () => {
    return (
        <div className={`w-full overflow-hidden ${styles.flexCenter}`}>
            <div className={`flex`}>
                <section className="flex-1 bg-placeholder">
                    <LoginLeft />
                </section>
                <section className="flex-1">
                    <LoginRight />
                </section>
            </div>
        </div>
    )
}

export default Login