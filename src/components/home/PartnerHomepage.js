import { styles } from "../../constant"

const PartnerHomepage = ({ title, data }) => {
    return (
        <div className={`${styles.boxContent} ${styles.paddingX} relative`}>
            <div className={`z-10 flex flex-col sm:gap-16 gap-6 items-center text-cardtext ${styles.paddingY} relative`}>
                <h2 className="font-bold text-5xl">{title}</h2>
                <div className="flex flex-row items-center gap-8 justify-center">
                    {data && data.map((item, index) => (
                        <div key={index} className="bg-white p-5 rounded-lg">
                            <div className="border-2 border-dashed rounded-lg p-5">
                                <img src={item.img} alt="partner" className="w-full h-full" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute bgElipOrange z-0">
            </div>
        </div>
    )
}

export default PartnerHomepage