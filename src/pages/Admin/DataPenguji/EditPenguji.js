import { useFormik } from "formik"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Profile } from "../../../assets"
import { HeaderAdmin } from "../../../components"
import { styles } from "../../../constant"
import api from "../../../controller/adminController"

const EditPenguji = () => {
    const { id } = useParams()
    const [data, setData] = useState(null)


    useEffect(() => {
        api.getPengujiById(id)
            .then((res) => {
                setData(res?.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            username: data?.username || '',
            nama_lengkap: data?.nama_lengkap || '',
            email: data?.email || '',
            institusi: data?.institusi?.nama_institusi || '',
            nomor: data?.nomor || ''
        },

    })
    return (
        <div className={`${styles.adminStyle}`}>
            <HeaderAdmin title="Edit Data Penguji" name="Muhammad Harsin" icon={Profile} />
            <form className="mt-10 flex flex-col gap-6 w-full">
                <div className={styles.editFormContent}>
                    <div className={styles.editLabel}><label>Username</label></div>
                    <input
                        type="text"
                        className={styles.editInput}
                        {...formik.getFieldProps('username')}
                    />
                </div>

                <div className={styles.editFormContent}>
                    <div className={styles.editLabel}><label>Nama Lengkap</label></div>
                    <input
                        type="text"
                        className={styles.editInput}
                        {...formik.getFieldProps('nama_lengkap')}
                    />
                </div>

                <div className={styles.editFormContent}>
                    <div className={styles.editLabel}><label>Email</label></div>
                    <input
                        type="email"
                        className={styles.editInput}
                        {...formik.getFieldProps('email')}
                    />
                </div>

                <div className={styles.editFormContent}>
                    <div className={styles.editLabel}><label>Institusi</label></div>
                    <input
                        type="text"
                        className={styles.editInput}
                        {...formik.getFieldProps('institusi')}
                    />
                </div>

                <div className="flex gap-4 items-start">
                    <div className={styles.editLabel}><label>Upload File</label></div>
                    <input type="file" className={styles.editInput} />
                </div>

                <div className={styles.editFormContent}>
                    <div className={styles.editLabel}><label>Nomor Telepon</label></div>
                    <input
                        type="text"
                        className={styles.editInput}
                        {...formik.getFieldProps('nomor')}
                    />
                </div>

                <div className={styles.editFormContent}>
                    <button type="submit" className={styles.btnStyle1}>Save Data</button>
                </div>
            </form>
        </div>
    )
}

export default EditPenguji