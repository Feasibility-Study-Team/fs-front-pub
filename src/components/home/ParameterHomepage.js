import React from 'react'
import { styles } from '../../constant'

const ParameterHomepage = ({title, desc, data}) => {
  return (
    <div className={`${styles.boxContent} flex flex-col text-cardtext gap-10`}>
        <div className="flex flex-col gap-5">
            <h2 className="font-bold text-5xl">{title}</h2>
            <p className="font-medium text-greyuser text-base">{desc}</p>
        </div>
        <div className="flex flex-row flex-wrap justify-between">
            {data && data.map((item, index)=>(
            <div key={index} className={`w-56 ${item.style} rounded-3xl p-5 flex flex-col gap-4 items-center`}>
                <p className="w-full font-bold text-white text-5xl">{item.number}</p>
                <img src={item.img} alt={item.title} className="h-36 w-36 rounded-full object-cover object-center"/>
                <h3 className="w-full font-semibold text-2xl">{item.title}</h3>
            </div>))}
        </div>
    </div>
  )
}

export default ParameterHomepage