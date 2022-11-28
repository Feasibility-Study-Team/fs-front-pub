import { useFormik } from "formik"
import * as Yup from 'yup'
import { Link, useNavigate } from "react-router-dom"
import { styles } from "../../../constant"
import { useEffect, useState } from "react"
import api from "../../../controller/adminController"

const TambahParameter = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const [aspek, setAspek] = useState(null)

  useEffect(() => {
    api.getAspek()
      .then((res) => {
        setAspek(res?.data)
      })
      .catch((err) => {
        console.log(err)
        setError("Error get aspek")
      })
  }, [])

  const doParameter = (values) => {
    formik.setSubmitting(false);
    api.addParameter(values)
      .then((res) => {
        console.log(res)
        navigate("/admin/feasibility")
      })
      .catch((err) => {
        console.log(err)
        setError("error")
      })
      .finally(() => {
        formik.resetForm();
      })
  }

  const formik = useFormik({
    initialValues: {
      nama_parameter: '',
      id_aspek: '',
    },

    validationSchema: Yup.object({
      nama_parameter: Yup.string()
        .required('Parameter harus di isi'),
      id_aspek: Yup.string()
        .required('Aspek harus di isi')
    }),

    onSubmit: doParameter
  })
  return (
    <form onSubmit={formik.handleSubmit} >
      <div className="w-full bg-white p-6 rounded-lg flex flex-col gap-6">
        <h2 className="font-bold text-2xl">Tambah Parameter</h2>
        <div className="flex">
          <div className="flex flex-col gap-6 w-full">
            <div className={`${styles.editFormContent} flex flex-row items-center`}>
              <div className="w-64"><label>Aspek Feasibility</label></div>
              <div className={`${styles.editInput} bg-placeholder border-2 border-[#252733] rounded-lg flex items-center justify-center`}>
                <select type="text" className="w-full bg-transparent"
                  {...formik.getFieldProps('id_aspek')}
                >
                  <option value="" hidden>Pilih Aspek</option>
                  {aspek && aspek.map((item, index) => (
                    <option key={index} value={item.id_aspek}>{item.nama}</option>
                  ))}
                </select>
              </div>
            </div>
            {formik.touched.id_aspek && formik.errors.id_aspek && <div className={`${styles.errorInput} mb-[10px]`}>{formik.errors.id_aspek}</div>}
            <div className={`${styles.editFormContent} flex flex-row items-center`}>
              <div className="w-64"><label>Parameter Aspek</label></div>
              <input
                type="text"
                className={`${styles.editInput} bg-placeholder border-2 border-[#252733] rounded-lg`}
                {...formik.getFieldProps('nama_parameter')}
              />
            </div>
            {formik.touched.nama_parameter && formik.errors.nama_parameter && <div className={`${styles.errorInput} mb-[10px]`}>{formik.errors.nama_parameter}</div>}
          </div>
        </div>
        {error && <div className={`${styles.errorInput}`}>{error}</div>}
        <div className="w-full flex flex-row justify-end gap-6">
          <button className={`cursor-pointer ${styles.btnStyle2}`} type="submit">
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

export default TambahParameter