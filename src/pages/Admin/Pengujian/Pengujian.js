import { useFormik } from "formik"
import * as Yup from 'yup'
import { useContext} from "react"
import { Profile } from "../../../assets"
import { HeaderAdmin, TableUji } from "../../../components"
import { styles } from "../../../constant"
import { AdminContext } from "../../../context/Admin"

const Pengujian = () => {
    const {uji, penguji, alat, addUji} = useContext(AdminContext)

    const doUji = (values) => {
        formik.setSubmitting(false)
        formik.resetForm()
        addUji(values)
    }

    const formik = useFormik({
        initialValues: {
            id_alat: '',
            id_penguji: ''
        },

        validationSchema: Yup.object({
            id_alat: Yup.string()
                .required("Alat harus di isi"),
            id_penguji: Yup.string()
                .required("Penguji harus di isi")
        }),

        onSubmit: doUji
    })
    return (
        <div className={styles.adminStyle}>
            <HeaderAdmin title="Pengujian" name="Muhammad Harsin" icon={Profile} />
            <div className="mt-10 flex">
                {alat && penguji ?
                    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
                        <div className="flex flex-row gap-4">
                            <select
                                className="border-2 p-2"
                                {...formik.getFieldProps('id_alat')}
                            >
                                <option value="" hidden>Pilih Alat</option>
                                {alat?.data?.map((alat, index) => (
                                    <option value={alat?.id_alat} key={index}>
                                        {alat?.nama_alat}
                                    </option>
                                ))}

                            </select>
                            <select
                                className="border-2 p-2"
                                {...formik.getFieldProps('id_penguji')}
                            >
                                <option value="" hidden>Pilih Penguji</option>
                                {penguji?.data?.map((penguji, index) => (
                                    <option value={penguji?.id_inventor} key={index}>
                                        {penguji?.nama_lengkap}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {formik.touched.id_alat && formik.errors.id_alat && <div>{formik.errors.id_alat}</div>}
                        {formik.touched.id_penguji && formik.errors.id_penguji && <div>{formik.errors.id_penguji}</div>}
                        <div>
                            <button type="submit" className={styles.btnStyle1}>Buat Pengujian</button>
                        </div>
                    </form>
                    :
                    <div>
                        ss
                    </div>
                }
            </div>

            <div className="mt-10">
                {uji && <TableUji res={uji} title="Data Pengujian"/>}
            </div>
        </div>
    )
}

export default Pengujian