import { airflowImg, hepaImg, lawnmowerImg, scleanerImg } from "../../assets"
import { DescriptionProduct, HeadProduct, ProductHomepage } from "../../components"
import { styles } from "../../constant"

const Product = () => {
    const response = {
        msg: "sukses",
        alat: {
            category: "Teknologi Tepat Guna",
            nama_alat: "Lawn Mower",
            price: "1500000",
            desc: "Lawn mower with wireless design, easy to use. This lawn mower suitable for many occasions. The park is greened, the garden is pruned and tree branches are trimmed, and the lawn is trimmed.",
            rating: 4,
            img: [
                {
                    img: lawnmowerImg
                },
                {
                    img: lawnmowerImg
                },
                {
                    img: lawnmowerImg
                }
            ],
            feasibilitydesc: [
                {
                    desc: "Easy to handle areas such as potholes, undulating terrain, lawn edges, flower beds, and under flower stands."
                },
                {
                    desc: "Mowing the grass on the flat ground, quickly trim the grass on the lawn, the angle is flexible, and the slope haystacks are quickly trimmed."
                },
                {
                    desc: "Had special plant protection fence effectively prevents damage to the flowerbed, and the special baffle effectively prevents the grass from splashing."
                }
            ],
            spec: [
                {
                    desc: "Material: Stainless steel"
                },
                {
                    desc: "Battery: 12V/24V/36V/48V lithium battery"
                },
                {
                    desc: "Power: 450W~600W"
                },
                {
                    desc: "Speed: 0-22000RPM"
                },
                {
                    desc: "Telescopic size: 95-120cm adjustable"
                }
            ],
            review: [
                {
                    desc: "Good"
                }
            ],
        },
        product: [
            {
                photo: airflowImg,
                name: "Portable Laminar Air Flow",
                rating: 4,
                price: 5000000
            },
            {
                photo: lawnmowerImg,
                name: "Lawn Mower",
                rating: 5,
                price: 1500000
            },
            {
                photo: scleanerImg,
                name: "Secondary Cleaner Belt Cleaner",
                rating: 4,
                price: 200000
            },
            {
                photo: hepaImg,
                name: "Hepa filter Effisiensi 99,99%",
                rating: 3,
                price: 50000
            },
            {
                photo: airflowImg,
                name: "Portable Laminar Air Flow",
                rating: 4,
                price: 5000000
            },
            {
                photo: lawnmowerImg,
                name: "Lawn Mower",
                rating: 5,
                price: 1500000
            },
            {
                photo: scleanerImg,
                name: "Secondary Cleaner Belt Cleaner",
                rating: 4,
                price: 200000
            },
            {
                photo: hepaImg,
                name: "Hepa filter Effisiensi 99,99%",
                rating: 3,
                price: 50000
            }
        ],
    }
    return (
        <div className="w-full overflow-hidden">
            <div className={`w-full bg-white ${styles.flexCenter} ${styles.paddingX} ${styles.paddingY}`}>
                <HeadProduct
                    category={response.alat.category}
                    desc={response.alat.desc}
                    img={response.alat.img[0].img}
                    name={response.alat.nama_alat}
                    price={response.alat.price}
                    rating={response.alat.rating}
                />
            </div>
            <div className={`w-full bg-white ${styles.flexCenter} ${styles.paddingX} sm:pt-16 sm:pb-52 pt-6 pb-12`}>
                <DescriptionProduct
                    imgs={response.alat.img}
                    desc={response.alat.feasibilitydesc}
                    spec={response.alat.spec}
                    review={response.alat.review}
                />
            </div>
            <div className={`w-full bg-placeholder ${styles.flexCenter} ${styles.paddingX} ${styles.paddingY}`}>
                <ProductHomepage
                    title="You may also like"
                    data={response.product} />
            </div>
        </div>
    )
}

export default Product