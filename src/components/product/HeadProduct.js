import { styles } from "../../constant"
import { rupiahFormatter } from "../../constant/formatter"
import Rating from "../Rating"

const HeadProduct = ({ category, name, price, desc, rating, img }) => {
    return (
        <div className={`${styles.boxContent} flex flex-row gap-16 justify-between`}>
            <div className="flex flex-col basis-1/2">
                <h1 className="font-medium text-xl text-greyuser mb-2">{category}</h1>
                <h2 className="font-bold text-cardtext text-7xl mb-5">{name}</h2>
                <p className="font-semibold text-3xl text-cardtext mb-8">{price ? rupiahFormatter(price) : ""}</p>
                <p className="font-medium text-lg text-greyuser">{desc}</p>
                <div className="my-6"><Rating rating={rating} /></div>
                <div>
                    <button className={styles.btnStyle1}>Add to cart</button>
                </div>
            </div>
            <div className="w-[472px] h-[472px] relative">
                <div className={`${styles.gradientbg2} top-2 left-14 absolute z-0`}>
                </div>
                <div className={`${styles.gradientbg1} top-32 left-12 absolute z-0`}>
                </div>
                <div className="w-full h-full rounded-2xl bg-placeholder p-5 flex items-center relative z-10">
                    <img src={img} alt={name} className="w-full h-full object-cover object-center rounded-lg" />
                </div>
            </div>

        </div>
    )
}

export default HeadProduct