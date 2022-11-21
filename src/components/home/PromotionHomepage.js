import { styles } from "../../constant"

const PromotionHomepage = ({ title, desc, img, data }) => {
    return (
        <div className={`${styles.boxContent} flex lg:flex-row flex-col gap-20 flex-wrap items-center text-cardtext`}>
            <div className="flex-1">
                <img src={img} alt="alat" className="rounded-lg" />
            </div>
            <div className="flex-1 flex flex-col gap-9 items-center">
                <h2 className="font-bold text-5xl">{title}</h2>
                <p className="font-medium text-lg text-greyuser">{desc}</p>
                <div className={`flex flex-wrap gap-x-24 gap-y-8 items-center justify-center ${styles.paddingX}`}>
                    {data && data.map((item, index)=>(
                        <div className="w-48 flex gap-4 items-center" key={index}>
                            <img src={item.icon} alt={item.title} className="h-9 w-9"/>
                            <p className="font-medium text-lg">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PromotionHomepage