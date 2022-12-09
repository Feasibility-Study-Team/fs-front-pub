import { styles } from "../../constant"

const HeadAbout = ({ title, img, data }) => {
    return (
        <div className={`${styles.boxContent} flex lg:flex-row flex-col gap-16 justify-between text-white`}>
            <div className="flex flex-col gap-16 justify-center">
                <h1 className="font-semibold text-5xl leading-[80px]">{title}</h1>
                <div className="flex flex-wrap items-center justify-center gap-20">
                    {data && data.map((item, index) => (
                        <div key={index} className="relative pl-14 pt-14">
                            <div className="absolute left-0 top-0 h-24 w-24 bg-[#FA991C] rounded-full z-0 flex items-center justify-center text-black">
                                <img src={item.icon} alt={item.title}/>
                            </div>
                            <div className="relative flex flex-col z-10">
                                <p className="font-bold text-4xl">{item.number}</p>
                                <h2 className="font-normal text-lg">{item.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <img src={img} alt="alat" className="xl:w-[573px] xl:h-[452px] lg:h-[353px] lg:w-[453px] rounded-lg object-cover object-center" />
        </div>
    )
}

export default HeadAbout