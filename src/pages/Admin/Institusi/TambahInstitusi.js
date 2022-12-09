import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { Profile } from "../../../assets"
import { HeaderAdmin } from "../../../components"
import { styles } from "../../../constant"
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { phoneRegExp } from "../../../constant/variable"
import { AdminContext } from "../../../context/Admin"

const TambahInstitusi = () => {
    const {addInstitusi} = useContext(AdminContext)
    const [error, setError] = useState(null)

    const doAdd = (values) => {
        setError(null)
        formik.setSubmitting(false)
        formik.resetForm()
        addInstitusi(values, setError)
    }

    const formik = useFormik({
        initialValues: {
            nama_institusi: '',
            alamat: '',
            nomor: ''
        },

        validationSchema: Yup.object({
            nama_institusi: Yup.string()
                .required('Nama harus di isi'),
            alamat: Yup.string()
                .required('Alamat harus di isi'),
            nomor: Yup.string()
                .required('Tidak boleh kosong')
                .matches(phoneRegExp, 'No Telp tidak valid')
        }),

        onSubmit: doAdd
    })

    const registerStyle = {
        errorStyle: "font-normal text-red-500"
    }
    return (
        <div className={styles.adminStyle}>
            <HeaderAdmin title="Tambah Institusi" name="Muhammad Harsin" icon={Profile} />

            <form className="mt-10" onSubmit={formik.handleSubmit}>
                <div className="w-full bg-white p-6 rounded-lg flex flex-col gap-6">
                    <h2 className="font-bold text-2xl">Tambah Institusi</h2>
                    <div className="flex">
                        <div className="flex flex-col gap-6 w-full">
                            <div className={`${styles.editFormContent} flex flex-row items-center`}>
                                <div className="w-64"><label>Institusi</label></div>
                                <div>
                                    <input
                                        type="text"
                                        className={`${styles.editInput} bg-placeholder border-2 border-[#252733] rounded-lg`}
                                        {...formik.getFieldProps('nama_institusi')}
                                    />
                                    {formik.touched.nama_institusi && formik.errors.nama_institusi && <div className={`${registerStyle.errorStyle} mb-[10px]`}>{formik.errors.nama_institusi}</div>}
                                </div>
                            </div>
                            <div className={`${styles.editFormContent} flex flex-row items-center`}>
                                <div className="w-64"><label>Alamat</label></div>
                                <div>
                                    <input
                                        type="text"
                                        className={`${styles.editInput} bg-placeholder border-2 border-[#252733] rounded-lg`}
                                        {...formik.getFieldProps('alamat')}
                                    />
                                    {formik.touched.alamat && formik.errors.alamat && <div className={`${registerStyle.errorStyle} mb-[10px]`}>{formik.errors.alamat}</div>}
                                </div>
                            </div>
                            <div className={`${styles.editFormContent} flex flex-row items-center`}>
                                <div className="w-64"><label>No Telp</label></div>
                                <div>
                                    <input
                                        type="text"
                                        className={`${styles.editInput} bg-placeholder border-2 border-[#252733] rounded-lg`}
                                        {...formik.getFieldProps('nomor')}
                                    />
                                    {formik.touched.nomor && formik.errors.nomor && <div className={`${registerStyle.errorStyle} mb-[10px]`}>{formik.errors.nomor}</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    {error && <div className={`${registerStyle.errorStyle}`}>{error}</div>}
                    <div className="w-full flex flex-row justify-end gap-6">
                        <button className={`cursor-pointer ${styles.btnStyle2}`}>
                            Simpan
                        </button>
                        <Link to="/admin/institusi">
                            <button className={styles.btnStyle1}>
                                Kembali
                            </button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default TambahInstitusi