import { Link } from "react-router-dom"
import { styles } from "../../constant"
import { Swiper, SwiperSlide } from 'swiper/react';
import Rating from "../Rating";
import { BsPlusSquareFill } from "react-icons/bs"
import { rupiahFormatter } from "../../constant/formatter";

import 'swiper/css';
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";

const ProductHomepage = ({ title, data }) => {
    const style = {
        card: "border-2 border-[#1C768F] rounded-3xl p-4 flex flex-col items-center gap-2 mb-16 bg-white"
    }
    return (
        <div className={`${styles.boxContent} flex flex-col gap-16 text-cardtext`}>
            <div className="flex items-center justify-between">
                <h2 className="font-bold text-5xl">{title}</h2>
                <Link to="/product" className="font-semibold text-[#1C768F] hover:underline hover:underline-offset-4">{"View all >"}</Link>
            </div>
            {data &&
                <div>
                    <Swiper
                        spaceBetween={25}
                        slidesPerView={4}
                        modules={[Scrollbar]}
                        scrollbar={{
                            hide: false
                        }}
                    >
                        <div>
                            {data.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className={style.card}>
                                        <img src={item.photo} alt={item.name} className="h-40" />
                                        <div className="w-full">
                                            <h3 className="h-16 text-lg font-medium">{item.name}</h3>
                                            <Rating rating={item.rating} />
                                        </div>
                                        <div className="w-full flex flex-row flex-wrap items-center justify-between">
                                            <p className="font-bold text-2xl">{rupiahFormatter(item.price)}</p>
                                            <Link to="/product/1">
                                                <button>
                                                    <BsPlusSquareFill size={45} />
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </div>
            }
        </div>
    )
}

export default ProductHomepage