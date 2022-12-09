import { convertToRaw, EditorState } from "draft-js"
import { Editor } from "react-draft-wysiwyg";
import React, { useContext } from "react"
import { AiFillPlusCircle } from "react-icons/ai"
import { useOutletContext } from "react-router-dom"
import { styles } from "../../../../constant"
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from "react";
import { PreviewImage } from "../../../../components";
import { UserContext } from "../../../../context/User";

const InventorNewProject = () => {
  const { createAlat } = useContext(UserContext)
  const context = useOutletContext()
  const style = {
    containerForm: "flex flex-col gap-6",
    labelForm: "font-medium text-cardtext text-xl",
    errorStyle: "font-normal text-red-500"
  }
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

  const [specState, setSpecState] = React.useState(
    () => EditorState.createEmpty(),
  );

  const [imgs, setImgs] = useState([])

  const handleDeleteImg = (index) => {
    const filter = imgs.filter((img, idx) => (idx !== index))
    setImgs(filter)
  }

  const handleAddImg = (e) => {
    if (e.target.files.length > 0) {
      setImgs(prev => [...prev, e.target.files[0]])
    }
  }

  const [error, setError] = useState(null)

  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
    formik.values.deskripsi_alat = draftToHtml(convertToRaw(editorState.getCurrentContent()))
  };

  const handleSpecChange = (newSpecState) => {
    setSpecState(newSpecState);
    formik.values.spesifikasi_alat = draftToHtml(convertToRaw(specState.getCurrentContent()))
  };

  const doSave = (values) => {
    const formData = new FormData()
    console.log("formik", values)
    formData.append("deskripsi_alat", values.deskripsi_alat)
    formData.append("spesifikasi_alat", values.spesifikasi_alat)
    formData.append("id_inventor", context?.dtoken?.id)
    formData.append("nama_alat", values.nama_alat)
    imgs.map((item) => (
      formData.append("photo_alat", item)
    ))
    formik.setSubmitting(false)

    createAlat(formData, setError)

    formik.resetForm()
    setEditorState(EditorState.createEmpty())
    setSpecState(EditorState.createEmpty())
  }

  const formik = useFormik({
    initialValues: {
      nama_alat: '',
      deskripsi_alat: '',
      spesifikasi_alat: '',
      photo_alat: null
    },

    validationSchema: Yup.object({
      nama_alat: Yup.string()
        .required('Nama Alat harus di isi'),
      deskripsi_alat: Yup.string()
        .required('Deskripsi harus di isi'),
      photo_alat: Yup.mixed()
    }),

    onSubmit: doSave
  })

  return (
    <div className="w-full bg-placeholder rounded-lg p-12">
      <form className="flex flex-col gap-7" onSubmit={formik.handleSubmit}>
        <div className={style.containerForm}>
          <label className={style.labelForm}>Machine Name</label>
          <input
            type="text"
            className="h-12 border-2"
            {...formik.getFieldProps('nama_alat')}
          />
          {formik.touched.nama_alat && formik.errors.nama_alat && <div className={`${style.errorStyle} mb-[10px]`}>{formik.errors.nama_alat}</div>}
        </div>

        <div className={style.containerForm}>
          <label className={style.labelForm}>Description</label>
          <div className="w-full border-2">
            <Editor
              editorState={editorState}
              editorClassName="bg-white p-2"
              onEditorStateChange={handleEditorChange}
              toolbar={{
                options: ['list']
              }}

            />
            {formik.touched.deskripsi_alat && formik.errors.deskripsi_alat && <div className={`${style.errorStyle} mb-[10px]`}>{formik.errors.deskripsi_alat}</div>}
          </div>
        </div>

        <div className={style.containerForm}>
          <label className={style.labelForm}>Specification</label>
          <div className="w-full border-2">
            <Editor
              editorState={specState}
              editorClassName="bg-white p-2"
              onEditorStateChange={handleSpecChange}
              toolbar={{
                options: ['list']
              }}
            />
          </div>
        </div>

        <div className={style.containerForm}>
          <label className={style.labelForm}>Product Images</label>
          <div>
            <label htmlFor="drop-image" className="flex items-center justify-center w-full h-20 border-2 border-cardtext border-dashed rounded-lg cursor-pointer hover:bg-gray-200">
              <input id="drop-image" type="file" className="hidden" onChange={(e) => handleAddImg(e)} />
              <div className="flex flex-row items-center justify-between text-cardtext gap-4">
                <AiFillPlusCircle size={30} />
                <p className="font-medium text-base">Input Image</p>
              </div>
            </label>
          </div>
          <div className="flex flex-row gap-5 overflow-x-auto">
            {imgs && imgs?.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <PreviewImage file={item} />
                <button type="button" onClick={() => handleDeleteImg(index)} className="bg-red-600 text-white p-2 text-xs rounded-lg">
                  DELETE
                </button>
              </div>
            ))}
          </div>
        </div>
        {error && <div className={style.errorStyle}>{error}</div>}
        <div className="pt-6">
          <button type="submit" className={styles.btnStyle2}>Save</button>
        </div>
      </form>
    </div>
  )
}

export default InventorNewProject