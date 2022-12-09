import { useState } from "react"

const PreviewImage = ({file}) => {
    const [preview, setPreview] = useState(null)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
        setPreview(reader.result)
    }
  return (
    <div className="w-64 h-36 p-1">
        <img src={preview} alt="preview" className="object-cover object-center w-full h-full rounded-lg"/>
    </div>
  )
}

export default PreviewImage