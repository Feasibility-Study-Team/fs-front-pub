import { useEffect, useState } from "react"
import { AllProduct } from "../../components"
import { styles } from "../../constant"
import api from "../../controller/userController"
const Products = () => {
    const [product, setProduct] = useState(null)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        api.getProduct()
            .then((res) => {
                setProduct(res?.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
   
    return (
        <div className="w-full overflow-hidden">
            <div className={`w-full bg-white ${styles.flexCenter} ${styles.paddingX} ${styles.paddingY}`}>
                <AllProduct data={product} />
            </div>
        </div>
    )
}

export default Products