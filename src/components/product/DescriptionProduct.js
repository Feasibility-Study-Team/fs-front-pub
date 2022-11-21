import { styles } from "../../constant"
import { Swiper, SwiperSlide } from "swiper/react";
import { MdKeyboardArrowUp } from "react-icons/md"

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";
import { useState } from "react";

const DescriptionProduct = ({ imgs, desc, spec, review }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const [open, setOpen] = useState({
        desc: false,
        spec: false,
        review: false
    })
    const style = {
        descTitle: "font-semibold text-xl text-cardtext",
        descContent: "font-medium text-lg text-greyuser"
    }
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
                                <img src={item.img} alt="img" className="w-full h-full object-contain object-center" />
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
                                <img src={item.img} alt="img" className="w-full h-full object-cover object-center" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="w-full">
                <div className="border-t-2 border-b-2 border-greyuser w-full py-8 flex flex-col gap-4">
                    <button className="text-left" onClick={() => setOpen({
                        desc: !open.desc,
                        spec: open.spec,
                        review: open.review
                    })}>
                        <div className="w-full flex justify-between">
                            <h2 className={style.descTitle}>Description</h2>
                            <span className={`${open.desc ? "rotate-180" : ""} duration-300`}><MdKeyboardArrowUp size={25} /></span>
                        </div>
                    </button>
                    <div className={open.desc ? "px-5 visible " : "hidden invisible"}>
                        {desc &&
                            <ol className="list-decimal">
                                {desc.map((item, index) => (
                                    <li key={index} className={style.descContent}>{item.desc}</li>
                                ))}
                            </ol>
                        }
                    </div>
                </div>

                <div className="border-b-2 border-greyuser w-full py-8 flex flex-col gap-4">
                    <button className="text-left" onClick={() => setOpen({
                        spec: !open.spec,
                        desc: open.desc,
                        review: open.review
                    })}>
                        <div className="w-full flex justify-between">
                            <h2 className={style.descTitle}>Specification</h2>
                            <span className={`${open.spec ? "rotate-180" : ""} duration-300`}><MdKeyboardArrowUp size={25} /></span>
                        </div>
                    </button>
                    <div className={open.spec ? "px-5 visible " : "hidden invisible"}>
                        {spec &&
                            <ol className="list-decimal">
                                {spec.map((item, index) => (
                                    <li key={index} className={style.descContent}>{item.desc}</li>
                                ))}
                            </ol>
                        }
                    </div>
                </div>

                <div className="border-b-2 border-greyuser w-full py-8 flex flex-col gap-4">
                    <button className="text-left" onClick={() => setOpen({
                        review: !open.review,
                        desc: open.desc,
                        spec: open.spec,
                    })}>
                        <div className="w-full flex justify-between">
                            <h2 className={style.descTitle}>Reviews</h2>
                            <span className={`${open.review ? "rotate-180" : ""} duration-300`}><MdKeyboardArrowUp size={25} /></span>
                        </div>
                    </button>
                    <div className={open.review ? "px-5 visible " : "hidden invisible"}>
                        {review &&
                            <ol className="list-decimal">
                                {review.map((item, index) => (
                                    <li key={index} className={style.descContent}>{item.desc}</li>
                                ))}
                            </ol>
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DescriptionProduct