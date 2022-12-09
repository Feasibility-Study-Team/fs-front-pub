import React from 'react'
import { useState } from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md'

function Text({ content }) {
    return (
        <span dangerouslySetInnerHTML={{
            __html: content
        }} />
    )
}

const DescriptionDown = ({ desc, title, border }) => {
    const [open, setOpen] = useState(null)

    const style = {
        descTitle: "font-semibold text-xl text-cardtext",
        descContent: "font-medium text-lg text-greyuser"
    }
    return (
        <div className={`${border || ""} border-b-2 border-greyuser w-full py-8 flex flex-col gap-4`}>
            <button className="text-left" onClick={() => setOpen(!open)}>
                <div className="w-full flex justify-between">
                    <h2 className={style.descTitle}>{title}</h2>
                    <span className={`${open ? "rotate-180" : ""} duration-300`}><MdKeyboardArrowUp size={25} /></span>
                </div>
            </button>
            <div className={open ? "px-5 visible texttohtml font-medium text-lg" : "hidden invisible"}>
                {desc &&
                    <Text content={desc} />
                }
            </div>
        </div>
    )
}

export default DescriptionDown