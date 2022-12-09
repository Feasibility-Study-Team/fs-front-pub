import { styles } from "../../constant"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";
import { useState } from "react";
import DescriptionDown from "../DescriptionDown";


const DescriptionProduct = ({ imgs, desc, spec, review }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    return (
        <div className={`${styles.boxContent} flex md:flex-row flex-col gap-16`}>
            <div className="md:w-[344px] lg:w-[644px] w-full">
                <Swiper
                    spaceBetween={20}
                    // thumbs={{ swiper: thumbsSwiper }}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="w-full md:h-[256px] lg:h-[396px] mb-5"
                >
                    {imgs && imgs.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-full h-full bg-placeholder p-5">
                                <img src={item?.photo} alt="img" className="w-full h-full object-cover object-center" />
                            </div></SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={20}
                    slidesPerView={2}
                    watchSlidesProgress={true}
                    modules={[Navigation, Thumbs]}
                >
                    {imgs && imgs.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-placeholder h-40 cursor-pointer">
                                <img src={item?.photo} alt="img" className="w-full h-full object-cover object-center" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="w-full">
                <DescriptionDown desc={desc} title="Description" border="border-t-2" />
                <DescriptionDown desc={spec} title="Specification" />
                <DescriptionDown desc={review} title="Reviews" />
            </div>
        </div>
    )
}

export default DescriptionProduct