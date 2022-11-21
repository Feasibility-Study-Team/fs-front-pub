import { Swiper, SwiperSlide } from "swiper/react"
import { styles } from "../../constant"
import { ImQuotesLeft } from "react-icons/im"
import Rating from "../Rating"

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

const OpinionAbout = ({ title, quote, name, img, data }) => {
    return (
        <>
            <div className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter} w-full relative z-10`}>
                <div className={`${styles.boxContent} flex`}>
                    <div className="w-[620px] h-[580px] relative flex-1">
                        <img src={img} alt="opinions" className="w-[429px] h-[540px] absolute left-0 top-0" />
                        <div className="w-[368px] h-[350px] absolute right-0 bottom-0 bg-cardtext py-14 px-7 flex items-end">
                            <div className="flex flex-col gap-12 text-white text-base">
                                <p className="font-medium">{quote}</p>
                                <p className="w-full text-right font-bold">{name}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center px-16 flex-1">
                        <div className="flex flex-col gap-14">
                            <h2 className="font-bold text-5xl text-cardtext max-w-sm">{title}</h2>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={25}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: true
                                }}
                                pagination={{
                                    clickable: true,
                                    enabled: true
                                }}
                                modules={[Pagination, Autoplay]}
                                className="w-[450px] h-60"
                            >
                                {data && data.map((item, index) => (

                                    <SwiperSlide>
                                        <div className="w-full h-full relative">
                                            <div className="absolute -right-1 -top-1 bg-greenuser text-white border-greenuser border-8">
                                                <ImQuotesLeft size={64}/>
                                            </div>
                                            <div className="py-12 px-6 border-4 border-white z-10" key={index}>
                                                <div className="flex flex-col gap-2">
                                                    <Rating rating={item.rating} />
                                                    <p className="font-medium text-white text-base">{item.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                ))}

                            </Swiper>

                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.boxContent} absolute top-0 z-0`}>
                <div className="absolute bgCardGreen h-40 w-40 rounded-full left-0 top-0">
                </div>
            </div>
        </>

    )
}

export default OpinionAbout