import { airflowImg, hepaImg, lawnmowerImg, scleanerImg } from "../../assets"
import { AllProduct } from "../../components"
import { styles } from "../../constant"

const Products = () => {
    const response = {
        msg: "sukses",
        data: [
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
        ]
    }
    return (
        <div className="w-full overflow-hidden">
            <div className={`w-full bg-white ${styles.flexCenter} ${styles.paddingX} ${styles.paddingY}`}>
                <AllProduct data={response.data}/>
            </div>
        </div>
    )
}

export default Products