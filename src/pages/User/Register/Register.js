import { Gmail } from "../../../assets"
import { styles } from "../../../constant"
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from "react"
import { Link } from "react-router-dom"
import LoginLeft from "../Login/LoginLeft"
import { BsEye, BsEyeSlash } from "react-icons/bs"
import { phoneRegExp } from "../../../constant/variable"


const Register = () => {
    const [show, setShow] = useState(false)

    const dataInstitusi = [
        {
            name: "UPN Veteran Yogyakarta",
            address: "Babarsari"
        },
        {
            name: "UPN Veteran Jakarta",
            address: "Jakarta"
        }
    ]

    const registerStyle = {
        inputStyle: "border border-iris100 rounded-[10px] text-[16px] py-1.5 px-4 w-full max-h-[38px] focus:outline-none",
        stripStyle: "border-solid border border-black w-[125px] h-0",
        errorStyle: "font-normal text-red-500"
    }
    const [error, setError] = useState(null)

    const doRegist = (values) => {
        formik.setSubmitting(false);
        formik.resetForm();
        console.log(values);
        setError("Gagal Mendaftar")
    }

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            complete_name: '',
            institution: '',
            email: '',
            phone_number: '',
            agreement: false
        },

        validationSchema: Yup.object({
            username: Yup.string()
                .required('Username harus di isi'),
            password: Yup.string()
                .required('Password harus di isi'),
            complete_name: Yup.string()
                .required('Nama lengkap harus di isi'),
            institution: Yup.string()
                .required('Institusi harus di isi'),
            email: Yup.string()
                .required('Tidak boleh kosong')
                .email('Format email tidak valid'),
            phone_number: Yup.string()
                .required('Tidak boleh kosong')
                .matches(phoneRegExp, 'Nomer HP tidak valid'),
            agreement: Yup.bool()
        }),

        onSubmit: doRegist
    })
    return (
        <div className={`w-full overflow-hidden ${styles.flexCenter}`}>
            <div className={`flex md:flex-row flex-col-reverse`}>
                <div className="flex-1 bg-placeholder">
                    <LoginLeft />
                </div>
                <div className={`${styles.boxMd} sm:py-28 py-16 flex flex-col items-center flex-1`}>
                    <h1 className="font-bold text-black text-4xl text-center">REGISTER</h1>
                    <div className={`${styles.flexCenter} flex-col my-16`}>
                        <form className={`${styles.flexCenter} flex-col w-full`} onSubmit={formik.handleSubmit}>
                            <input
                                type="text"
                                placeholder="username"
                                className={`${registerStyle.inputStyle} ${formik.errors.username && formik.touched.username ? 'mb-[5px]' : 'mb-[20px]'}`}
                                {...formik.getFieldProps('username')}
                            />
                            {formik.touched.username && formik.errors.username && <div className={`${registerStyle.errorStyle} mb-[10px]`}>{formik.errors.username}</div>}

                            <input
                                type="text"
                                placeholder="nama lengkap"
                                className={`${registerStyle.inputStyle} ${formik.errors.complete_name && formik.touched.complete_name ? 'mb-[5px]' : 'mb-[20px]'}`}
                                {...formik.getFieldProps('complete_name')}
                            />
                            {formik.touched.complete_name && formik.errors.complete_name && <div className={`${registerStyle.errorStyle} mb-[10px]`}>{formik.errors.complete_name}</div>}

                            <select
                                className={`${registerStyle.inputStyle} ${formik.errors.institution && formik.touched.institution ? 'mb-[5px]' : 'mb-[20px]'} ${formik.values.institution === "" ? "text-[#999]" : ""}`}
                                {...formik.getFieldProps('institution')}
                            >
                                <option value="" hidden>institusi</option>
                                {dataInstitusi && dataInstitusi.map((item, index) => (
                                    <option key={index} value={item.name}>{item.name}</option>
                                ))}
                            </select>

                            {formik.touched.institution && formik.errors.institution && <div className={`${registerStyle.errorStyle} mb-[10px]`}>{formik.errors.institution}</div>}

                            <input
                                type="text"
                                placeholder="email"
                                className={`${registerStyle.inputStyle} ${formik.errors.email && formik.touched.email ? 'mb-[5px]' : 'mb-[20px]'}`}
                                {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email && <div className={`${registerStyle.errorStyle} mb-[10px]`}>{formik.errors.email}</div>}

                            <input
                                type="text"
                                placeholder="no. hp"
                                className={`${registerStyle.inputStyle} ${formik.errors.phone_number && formik.touched.phone_number ? 'mb-[5px]' : 'mb-[20px]'}`}
                                {...formik.getFieldProps('phone_number')}
                            />
                            {formik.touched.phone_number && formik.errors.phone_number && <div className={`${registerStyle.errorStyle} mb-[10px]`}>{formik.errors.phone_number}</div>}

                            <div className={`${registerStyle.inputStyle} flex items-center justify-between  ${formik.errors.password && formik.touched.password ? 'mb-[5px]' : 'mb-[20px]'}`}>
                                <input
                                    className="outline-none border-none"
                                    type={show ? 'text' : 'password'}
                                    placeholder="password"
                                    {...formik.getFieldProps('password')}
                                />
                                <span className="cursor-pointer opacity-0.5" onClick={() => setShow(!show)}>{show ? <BsEyeSlash /> : <BsEye />}</span>
                            </div>
                            {formik.touched.password && formik.errors.password && <div className={`${registerStyle.errorStyle}`}>{formik.errors.password}</div>}
                            {error && <div className={`${registerStyle.errorStyle}`}>{error}</div>}
                            <button className={`${styles.btnStyle1} mt-8`} type="submit">Register</button>
                        </form>
                        <div className="flex flex-row gap-[25px] justify-center items-center my-8">
                            <span className={`${registerStyle.stripStyle}`}></span><span className="font-bold text-xl">OR</span><span className={`${registerStyle.stripStyle}`}></span>
                        </div>
                        <button className="flex gap-[25px] mb-8">
                            <img src={Gmail} alt="gmail" />
                            <p className="font-bold text-xl">Register with Gmail</p >
                        </button>
                        <Link to="/login" className="font-light hover:underline hover:underline-offset-4">Have an account yet? Sign Up</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register