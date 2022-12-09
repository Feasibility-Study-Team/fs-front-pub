
import { useFormik } from "formik"
import * as Yup from 'yup'
import { Link } from "react-router-dom"
import { styles } from "../../../constant"
import { useContext, useState } from "react"
import { AdminContext } from "../../../context/Admin"

const TambahAspek = () => {
    const {addAspek} = useContext(AdminContext)
    const [error, setError] = useState(null)

    const doAspek = (values) => {
        formik.setSubmitting(false)
        addAspek(values, setError)
        formik.resetForm()
    }

    const formik = useFormik({
        initialValues: {
            nama_aspek: ''
        },

        validationSchema: Yup.object({
            nama_aspek: Yup.string()
                .required('Aspek harus di isi')
        }),

        onSubmit: doAspek
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="w-full bg-white p-6 rounded-lg flex flex-col gap-6">
                <h2 className="font-bold text-2xl">Tambah Aspek</h2>
                <div className="flex">
                    <div className="flex flex-col gap-6 w-full">
                        <div className={`${styles.editFormContent} flex flex-row items-center`}>
                            <div className="w-64"><label>Aspek Feasibility</label></div>
                            <input
                                type="text"
                                className={`${styles.editInput} bg-placeholder border-2 border-[#252733] rounded-lg`}
                                {...formik.getFieldProps('nama_aspek')}
                            />
                            {formik.touched.nama_aspek && formik.errors.nama_aspek && <div className={`${styles.errorInput} mb-[10px]`}>{formik.errors.nama_aspek}</div>}
                        </div>
                    </div>
                </div>
                {error && <div className={`${styles.errorInput}`}>{error}</div>}
                <div className="w-full flex flex-row justify-end gap-6">
                    <button type="submit" className={`cursor-pointer ${styles.btnStyle2}`}>
                        Simpan
                    </button>
                    <Link to="/admin/feasibility">
                        <button className={styles.btnStyle1}>
                            Kembali
                        </button>
                    </Link>
                </div>
            </div>
        </form>
    )
}

export default TambahAspek