import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { airflowImg, hepaImg, lawnmowerImg, scleanerImg } from "../../assets"
import { DescriptionProduct, HeadProduct, ProductHomepage } from "../../components"
import { styles } from "../../constant"
import { HomeContext } from "../../context/Home"
import api from "../../controller/inventorController"

const Product = () => {
    const { product } = useContext(HomeContext)
    const { id } = useParams()
    const [data, setData] = useState(null)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    useEffect(() => {
        api.getAlatId(id)
            .then((res) => {
                console.log(res?.data)
                setData(res?.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])
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
            feasibilitydesc: "<ol> <li>Easy to bandle areas such as potholes</li> <li>Mowing the grass flower</li> <li>Hand special plany protection fence</li> </ol>",
            spec: "<ol><li>Material: Stainless steel</li><li>Battery: 12V/24V/36V/48V lithium battery</li><li>Power: 450W~600W</li><li>Speed: 0-22000RPM</li><li>Telescopic size: 95-120cm adjustable</li></ol>",
            review: "<ol><li>Good</li></ol>",
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
            {console.log("data", data)}
            <div className={`w-full bg-white ${styles.flexCenter} ${styles.paddingX} ${styles.paddingY}`}>
                <HeadProduct
                    category={response?.category || "Teknologi Tepat Guna"}
                    desc={""}
                    img={data?.photo_alat[0]?.photo || lawnmowerImg}
                    name={data?.nama_alat}
                    price={null}
                    rating={response.alat.rating || null}
                />
            </div>
            <div className={`w-full bg-white ${styles.flexCenter} ${styles.paddingX} sm:pt-16 sm:pb-52 pt-6 pb-12`}>
                <DescriptionProduct
                    imgs={data?.photo_alat}
                    desc={data?.deskripsi_alat}
                    spec={data?.spesifikasi_alat}
                    review={data?.review}
                />
            </div>
            <div className={`w-full bg-placeholder ${styles.flexCenter} ${styles.paddingX} ${styles.paddingY}`}>
                <ProductHomepage
                    title="You may also like"
                    data={product} />
            </div>
        </div>
    )
}

export default Product