import { styles } from "../../constant"
import { rupiahFormatter } from "../../constant/formatter"
import Rating from "../Rating"

const HeadAlat = ({ category, name, price, desc, rating, img }) => {
    return (
        <div className={`${styles.boxContent} flex flex-row gap-16 justify-between`}>
            <div className="flex flex-col basis-1/2">
                <h1 className="font-medium text-xl text-greyuser mb-2">{category}</h1>

                <h2 className="font-bold text-cardtext text-4xl mb-5">{name}</h2>
                {price && <p className="font-semibold text-3xl text-cardtext mb-8">{rupiahFormatter(price)}</p>}
                {desc && <p className="font-medium text-lg text-greyuser">{desc}</p>}
                {rating && <div className="my-6"><Rating rating={rating} /></div>}
            </div>
            <div className="w-48 h-48 rounded-2xl bg-[#C4C4C4] p-5 flex items-center relative z-10">
                <img src={img} alt={name} className="w-full object-cover object-center" />
            </div>
        </div>
    )
}

export default HeadAlat