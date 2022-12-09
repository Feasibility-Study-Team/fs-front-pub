import { useFormik } from "formik"
import * as Yup from 'yup'
import { Link } from "react-router-dom"
import { styles } from "../../../constant"
import { useContext, useState } from "react"
import { AdminContext } from "../../../context/Admin"

const TambahData = () => {
  const {aspek, parameter, handlerParameter, addData} = useContext(AdminContext)
  const [error, setError] = useState(null)

  const doData = (values) => {
    formik.setSubmitting(false);
    addData(values, setError)
    formik.resetForm();
  }

  const formik = useFormik({
    initialValues: {
      nama_data: '',
      id_parameter: '',
      id_aspek: '',
      tipe: ''
    },

    validationSchema: Yup.object({
      nama_data: Yup.string()
        .required('Nama data harus di isi'),
      id_parameter: Yup.string()
        .required('Parameter harus di isi'),
      tipe: Yup.string()
        .required('Tipe data harus dipilih')
    }),

    onSubmit: doData
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="w-full bg-white p-6 rounded-lg flex flex-col gap-6">
        <h2 className="font-bold text-2xl">Tambah Parameter</h2>
        <div className="flex">
          <div className="flex flex-col gap-6 w-full">
            <div className={`${styles.editFormContent} flex flex-row items-center`}>
              <div className="w-64"><label>Aspek Feasibility</label></div>
              <div className={`${styles.editInput} bg-placeholder border-2 border-[#252733] rounded-lg flex items-center justify-center`}>
                <select
                  type="text" className="w-full bg-transparent"
                  onChange={(e) => handlerParameter(e.target.value)}
                >
                  <option value="" hidden>Pilih Aspek</option>
                  {aspek && aspek.map((item, index) => (
                    <option key={index} value={item.id_aspek}>{item.nama}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className={`${styles.editFormContent} flex flex-row items-center`}>
              <div className="w-64"><label>Parameter Aspek</label></div>
              <div className={`${styles.editInput} bg-placeholder border-2 border-[#252733] rounded-lg flex items-center justify-center`}>
                <select type="text" className="w-full bg-transparent"
                  disabled={parameter ? false : true}
                  {...formik.getFieldProps('id_parameter')}
                >
                  {parameter ? <option value="" hidden>Pilih Parameter</option> : <option value="" hidden>Pilih aspek dulu</option>}
                  {parameter && parameter.map((item, index) => (
                    <option key={index} value={item.id_parameter}>{item.nama}</option>
                  ))}
                </select>
              </div>
            </div>
            {formik.touched.id_parameter && formik.errors.id_parameter && <div className={`${styles.errorInput} mb-[10px]`}>{formik.errors.id_parameter}</div>}
            <div className={`${styles.editFormContent} flex flex-row items-center`}>
              <div className="w-64"><label>Nama Data</label></div>
              <input
                type="text"
                className={`${styles.editInput} bg-placeholder border-2 border-[#252733] rounded-lg`}
                {...formik.getFieldProps('nama_data')}
              />
            </div>
            {formik.touched.nama_data && formik.errors.nama_data && <div className={`${styles.errorInput} mb-[10px]`}>{formik.errors.nama_data}</div>}
            <div className={`${styles.editFormContent} flex flex-row items-center`}>
              <div className="w-64"><label>Tipe</label></div>
              <select
                type="text"
                className={`${styles.editInput} bg-placeholder border-2 border-[#252733] rounded-lg`}
                {...formik.getFieldProps('tipe')}>
                  <option value="" hidden>Pilih Tipe</option>
                  <option value="text">Text</option>
                  <option value="file">File</option>
                </select>
            </div>
            {formik.touched.tipe && formik.errors.tipe && <div className={`${styles.errorInput} mb-[10px]`}>{formik.errors.tipe}</div>}
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

export default TambahData