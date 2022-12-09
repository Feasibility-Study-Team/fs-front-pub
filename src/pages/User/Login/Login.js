import { styles } from "../../../constant"
import LoginLeft from "./LoginLeft"
import LoginRight from "./LoginRight"
import { useEffect } from "react";
import { UserProvider } from "../../../context/User";

const Login = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={`w-full overflow-hidden ${styles.flexCenter}`}>
            <div className={`flex md:flex-row flex-col-reverse`}>
                <section className="flex-1 bg-placeholder">
                    <LoginLeft />
                </section>
                <section className="flex-1">
                    <UserProvider>
                        <LoginRight />
                    </UserProvider>
                </section>
            </div>
        </div>
    )
}

export default Login