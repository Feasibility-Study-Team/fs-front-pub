import { styles } from "../../constant"

const CardAbout = ({ title, desc, img, data, flex, color }) => {
    return (
        <div className={`${styles.boxContent} flex ${flex ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col items-center sm:gap-14 gap-8 justify-between`}>
            <div className="flex-1">
                <img src={img} alt={title} className="md:w-[567px] lg:w-[667px] md:h-[311px] lg:h-[411px] object-cover object-center rounded-lg" />
            </div>
            <div className="flex-1 flex flex-col items-center gap-8">
                <h3 className={`font-bold text-5xl ${color} text-center`}>{title}</h3>
                <p className="font-medium text-lg text-greyuser text-center">{desc}</p>
                {data &&
                    <div className="flex flex-row flex-wrap gap-y-8 gap-x-16 justify-center">
                        {data.map((item, index) => (
                            <div className="w-48 flex gap-4 items-center" key={index}>
                                <img src={item.icon} alt={item.title} className="h-9 w-9" />
                                <p className="font-medium text-lg">{item.title}</p>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default CardAbout