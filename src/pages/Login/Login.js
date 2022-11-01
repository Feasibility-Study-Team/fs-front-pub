import { styles } from "../../constant"
import LoginLeft from "./LoginLeft"

const Login = () => {
    return (
        <div className={`w-full overflow-hidden ${styles.flexCenter}`}>
            <div className={`${styles.boxContent} flex`}>
                <section className="flex-1 bg-placeholder">
                    <LoginLeft />
                </section>
                <section className="flex-1">
                    <p>123</p>
                </section>
            </div>
        </div>
    )
}

export default Login