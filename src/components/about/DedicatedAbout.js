import { styles } from "../../constant"

const DedicatedAbout = ({title, desc, data}) => {
    return (
        <>
            <div className={`${styles.boxContent} absolute top-0 right-0 z-0`}>
                <div className="absolute bgCardOrange w-56 h-56 rounded-full -top-32 -right-32">
                </div>

            </div>
            <div className={`w-full ${styles.flexCenter} ${styles.paddingX} md:py-52 sm:py-32 py-16 text-greyuser`}>
                <div className={`${styles.boxContent} flex lg:flex-row flex-col items-center justify-between gap-16`}>
                    <div className="lg:basis-1/3 flex flex-col gap-8 lg:text-left text-center">
                        <h2 className="font-bold text-5xl text-cardtext">{title}</h2>
                        <p className="font-medium text-base">{desc}</p>
                    </div>
                    <div className="flex flex-row gap-10 justify-center flex-wrap">
                        {data && data.map((item, index)=>(
                            <div className={`flex flex-col gap-5 w-64 p-6 border-2 rounded-3xl bg-white border-dashed ${item.border}`} key={index}>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.circle}`}>
                                    <p className="font-semibold text-lg text-black">{item.number}</p>
                                </div>
                                <h3 className={`font-bold text-xl ${item.text}`}>{item.title}</h3>
                                <p className="font-medium text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>

    )
}

export default DedicatedAbout