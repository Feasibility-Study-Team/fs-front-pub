import { useContext } from "react"
import { styles } from "../../../../constant"
import { UjiContext } from "../../../../context/Uji"
import { useFormik } from 'formik'
import * as Yup from 'yup'
import api from "../../../../controller/ujiController"
import { useNavigate } from "react-router-dom"

const PengujiReview = () => {
    const navigate = useNavigate()
    const { dataUji, setDataUji } = useContext(UjiContext)

    const doUpdate = (values) => {
        formik.setSubmitting(false)
        api.updateUji(dataUji.id, values)
            .then(() => {
                api.getUjiId(dataUji.id)
                    .then((res) => {
                        setDataUji(res?.data)
                        navigate('/inventor/penguji')
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const formik = useFormik({
        initialValues: {
            nilai: dataUji?.nilai || '',
            review: dataUji?.review || '',
            status: "Done"
        },

        validationSchema: Yup.object({
            nilai: Yup.number()
                .required("Nilai harus di isi")
                .min(0)
                .max(100),
            review: Yup.string()
                .required("Review harus di isi")
        }),

        onSubmit: doUpdate
    })
    return (
        <form className="w-full bg-placeholder rounded-lg p-12 flex flex-col gap-8" onSubmit={formik.handleSubmit}>
            {console.log("data uji", dataUji?.id)}
            <h2 className="font-medium text-3xl text-cardtext">Feasibility Study Inforamation</h2>
            <div className="flex flex-col gap-2">
                <label className="font-medium text-cardtext text-lg">Project Review</label>
                <textarea
                    className="border-2 rounded-lg h- p-2"
                    {...formik.getFieldProps('review')}
                ></textarea>
            </div>
            {formik.touched.review && formik.errors.review && <div>{formik.errors.review}</div>}
            <div className="flex flex-col gap-2">
                <label className="font-medium text-cardtext text-lg">Feasibility Score</label>
                <div className="flex items-center gap-2">
                    <input
                        className="border-2 rounded-lg h-16 w-32 p-2" type="number" min={0} max={100}
                        {...formik.getFieldProps('nilai')}
                    />
                    <span className="text-4xl text-red-700 font-bold">%</span>
                </div>
            </div>
            {formik.touched.nilai && formik.errors.nilai && <div>{formik.errors.nilai}</div>}
            <div>
                <button type="submit" className={styles.btnStyle2}>Save</button>
            </div>
        </form>
    )
}

export default PengujiReview