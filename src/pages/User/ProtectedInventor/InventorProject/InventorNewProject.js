import { convertToRaw, EditorState } from "draft-js"
import { Editor } from "react-draft-wysiwyg";
import React from "react"
import { AiFillPlusCircle } from "react-icons/ai"
import { useOutletContext } from "react-router-dom"
import { styles } from "../../../../constant"
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from "react";
import api from "../../../../controller/inventorController"
import { useEffect } from "react";

const InventorNewProject = () => {

  const context = useOutletContext()
  const style = {
    containerForm: "flex flex-col gap-6",
    labelForm: "font-medium text-cardtext text-xl",
    errorStyle: "font-normal text-red-500"
  }
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

  const [error, setError] = useState(null)

  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
    formik.values.deskripsi_alat = draftToHtml(convertToRaw(editorState.getCurrentContent()))
  };

  const doSave = (values) => {
    console.log(values)
    formik.setSubmitting(false)
    api.createAlat(values)
      .then((res) => {
        console.log(res)
        formik.resetForm()
        setEditorState(EditorState.createEmpty())
      })
      .catch((err) => {
        console.log(err)
        setError("error")
      })
  }

  const formik = useFormik({
    initialValues: {
      nama_alat: '',
      deskripsi_alat: '',
      id_inventor: ''
    },

    validationSchema: Yup.object({
      nama_alat: Yup.string()
        .required('Nama Alat harus di isi'),
      deskripsi_alat: Yup.string()
        .required('Deskripsi harus di isi')
    }),

    onSubmit: doSave
  })

  useEffect(() => {
    formik.values.id_inventor = context?.dtoken?.id
    console.log(formik.values.id_inventor)
    // eslint-disable-next-line 
  }, [])
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
          <label className={style.labelForm}>Product Images</label>
          <div className="flex flex-row gap-5 justify-between">
            <label htmlFor="drop-image" className="flex items-center justify-center w-full h-40 border-2 border-cardtext border-dashed rounded-lg cursor-pointer hover:bg-gray-200">
              <div className="flex flex-row items-center justify-between text-cardtext gap-4">
                <AiFillPlusCircle size={30} />
                <p className="font-medium text-base">Input Image</p>
              </div>
              <input id="drop-image" type="file" className="hidden" />
            </label>
            <label htmlFor="drop-image" className="flex items-center justify-center w-full h-40 border-2 border-cardtext border-dashed rounded-lg cursor-pointer hover:bg-gray-200">
              <div className="flex flex-row items-center justify-between text-cardtext gap-4">
                <AiFillPlusCircle size={30} />
                <p className="font-medium text-base">Input Image</p>
              </div>
              <input id="drop-image" type="file" className="hidden" />
            </label>
            <label htmlFor="drop-image" className="flex items-center justify-center w-full h-40 border-2 border-cardtext border-dashed rounded-lg cursor-pointer hover:bg-gray-200">
              <div className="flex flex-row items-center justify-between text-cardtext gap-4">
                <AiFillPlusCircle size={30} />
                <p className="font-medium text-base">Input Image</p>
              </div>
              <input id="drop-image" type="file" className="hidden" />
            </label>
            <label htmlFor="drop-image" className="flex items-center justify-center w-full h-40 border-2 border-cardtext border-dashed rounded-lg cursor-pointer hover:bg-gray-200">
              <div className="flex flex-row items-center justify-between text-cardtext gap-4">
                <AiFillPlusCircle size={30} />
                <p className="font-medium text-base">Input Image</p>
              </div>
              <input id="drop-image" type="file" className="hidden" />
            </label>
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