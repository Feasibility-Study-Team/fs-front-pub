import { useFormik } from "formik"
import { useState } from "react"
import { styles } from "../../constant"
import * as Yup from 'yup'
import { BsEye, BsEyeSlash } from "react-icons/bs"
import { Link } from "react-router-dom"

const AdminLogin = () => {
    const [error, setError] = useState(null)
    const [show, setShow] = useState(false)

    const adminStyle = {
        inputStyle: "border border-iris100 rounded-[10px] text-[16px] py-1.5 px-4 w-[250px] max-h-[38px] outline-none bg-transparent",
        errorStyle: "font-normal text-red-500"
    }

    const doAdminLogin = (values) => {
        formik.setSubmitting(false)
        formik.resetForm()
        console.log(values)
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

        onSubmit: doAdminLogin
    })
    return (
        <div className={`w-full overflow-hidden ${styles.paddingX} ${styles.paddingY} ${styles.flexCenter} h-screen bg-placeholder`}>
            <div className={`${styles.flexCenter} flex-col`}>
                <h1 className="font-bold text-black text-4xl">ADMIN LOGIN</h1>
                <form className="py-16 flex flex-col items-center" onSubmit={formik.handleSubmit}>
                    <input
                        type="text"
                        placeholder="username"
                        className={`${adminStyle.inputStyle} ${formik.errors.username && formik.touched.username ? 'mb-[5px]' : 'mb-[20px]'}`}
                        {...formik.getFieldProps('username')}
                    />
                    {formik.touched.username && formik.errors.username && <div className={`${adminStyle.errorStyle} mb-[10px]`}>{formik.errors.username}</div>}

                    <div className={`${adminStyle.inputStyle} flex items-center justify-between  ${formik.errors.password && formik.touched.password ? 'mb-[5px]' : 'mb-[20px]'}`}>
                        <input
                            className="outline-none border-none bg-transparent"
                            type={show ? 'text' : 'password'}
                            placeholder="password"
                            {...formik.getFieldProps('password')}
                        />
                        <span className="cursor-pointer opacity-0.5" onClick={() => setShow(!show)}>{show ? <BsEyeSlash /> : <BsEye />}</span>
                    </div>

                    {formik.touched.password && formik.errors.password && <div className={`${adminStyle.errorStyle}`}>{formik.errors.password}</div>}
                    {error && <div className={`${adminStyle.errorStyle}`}>{error}</div>}
                    <button className={`${styles.btnStyle1} m-8`}>Login</button>
                    <Link to="/" className="font-light hover:underline hover:underline-offset-4">Back to homepage</Link>
                </form>

            </div>
        </div>
    )
}

export default AdminLogin