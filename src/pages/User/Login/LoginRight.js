import { Gmail } from "../../../assets"
import { styles } from "../../../constant"
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from "react"
import { Link } from "react-router-dom"
import { BsEye, BsEyeSlash } from "react-icons/bs"

const LoginRight = () => {
    const loginStyle = {
        inputStyle: "border border-iris100 rounded-[10px] text-[16px] py-1.5 px-4 w-[250px] max-h-[38px] outline-none",
        stripStyle: "border-solid border border-black w-[125px] h-0",
        errorStyle: "font-normal text-red-500"
    }

    const [error, setError] = useState(null)
    const [show, setShow] = useState(false)

    const doLogin = (values) => {
        formik.setSubmitting(false);
        formik.resetForm();
        console.log(values);
        setError("username/password salah!")
    }

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },

        validationSchema: Yup.object({
            username: Yup.string()
                .required('Username harus di isi'),
            password: Yup.string()
                .required('Password harus di isi')
        }),

        onSubmit: doLogin
    })
    return (
        <div className={`${styles.paddingX} ${styles.flexCenter} sm:py-28 py-16 flex-col`}>
            <h1 className="font-bold text-black text-4xl">LOGIN</h1>
            <div className={`${styles.flexCenter} flex-col my-16`}>
                <form className={`${styles.flexCenter} flex-col`} onSubmit={formik.handleSubmit}>
                    <input
                        type="text"
                        placeholder="username"
                        className={`${loginStyle.inputStyle} ${formik.errors.username && formik.touched.username ? 'mb-[5px]' : 'mb-[20px]'}`}
                        {...formik.getFieldProps('username')}
                    />
                    {formik.touched.username && formik.errors.username && <div className={`${loginStyle.errorStyle} mb-[10px]`}>{formik.errors.username}</div>}

                    <div className={`${loginStyle.inputStyle} flex items-center justify-between  ${formik.errors.password && formik.touched.password ? 'mb-[5px]' : 'mb-[20px]'}`}>
                        <input
                            className="outline-none border-none"
                            type={show ? 'text' : 'password'}
                            placeholder="password"
                            {...formik.getFieldProps('password')}
                        />
                        <span className="cursor-pointer opacity-0.5" onClick={() => setShow(!show)}>{show ? <BsEyeSlash /> : <BsEye />}</span>
                    </div>

                    {formik.touched.password && formik.errors.password && <div className={`${loginStyle.errorStyle}`}>{formik.errors.password}</div>}
                    {error && <div className={`${loginStyle.errorStyle}`}>{error}</div>}
                    <button className={`${styles.btnStyle1} mt-8`}>Login</button>
                </form>
                <div className="flex flex-row gap-[25px] justify-center items-center my-8">
                    <span className={`${loginStyle.stripStyle}`}></span><span className="font-bold text-xl">OR</span><span className={`${loginStyle.stripStyle}`}></span>
                </div>
                <button className="flex gap-[25px] mb-8">
                    <img src={Gmail} alt="gmail" />
                    <p className="font-bold text-xl">Login with Gmail</p>
                </button>
                <Link to="/register" className="font-light hover:underline hover:underline-offset-4">Don't have an account yet? Sign Up</Link>
            </div>

        </div>
    )
}

export default LoginRight 