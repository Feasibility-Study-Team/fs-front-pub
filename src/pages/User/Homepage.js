import { useEffect } from "react"
import { airflowImg, economicImg, hepaImg, lawnmowerImg, legalityImg, operationalImg, scheduleImg, scleanerImg, technicalImg } from "../../assets"
import { HeadHomepage, ParameterHomepage, PartnerHomepage, ProductHomepage, PromotionHomepage, ToolsHomepage } from "../../components"
import { styles } from "../../constant"
import { homepageData } from "../../constant/data"

const Homepage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const response = {
        message: "sukses",
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
        parameter: [
            {
                number: "01",
                img: economicImg,
                title: "Economic",
                style: "bgCardOrange"
            },
            {
                number: "02",
                img: legalityImg,
                title: "Legality",
                style: "bgCardBlue"
            },
            {
                number: "03",
                img: technicalImg,
                title: "Technical",
                style: "bgCardGreen"
            },
            {
                number: "04",
                img: scheduleImg,
                title: "Schedule",
                style: "bgCardMagenta"
            },
            {
                number: "05",
                img: operationalImg,
                title: "Operational",
                style: "bgCardPurple"
            }
        ]
    }
    return (
        <div className="w-full overflow-hidden">
            <div className={`w-full bg-placeholder ${styles.flexCenter} ${styles.paddingX}`}>
                <HeadHomepage title={homepageData.headTitle} desc={homepageData.headDesc} />
            </div>
            <div className={`w-full ${styles.flexCenter} ${styles.paddingX} ${styles.paddingY}`}>
                <ProductHomepage title={homepageData.productTitle} data={response.product} />
            </div>
            <div className={`w-full bg-placeholder ${styles.flexCenter} ${styles.paddingX} ${styles.paddingY}`}>
                <ParameterHomepage title={homepageData.parameterTitle} desc={homepageData.parameterDesc} data={response.parameter} />
            </div>
            <div className={`w-full ${styles.flexCenter} ${styles.paddingX} ${styles.paddingY} z-10 relative bg-white`}>
                <PromotionHomepage title={homepageData.whyTitle} desc={homepageData.whyDesc} img={homepageData.whyImg} data={homepageData.whyData} />
            </div>
            <div className={`w-full bg-placeholder ${styles.flexCenter}`}>
                <PartnerHomepage title={homepageData.partnerTitle} data={homepageData.partnerData}/>
            </div>
            <div className={`w-full bgCardBlue ${styles.paddingY} relative`}>
                <ToolsHomepage title={homepageData.toolsTitle} desc={homepageData.toolsDesc} img={homepageData.toolsImg}/>
            </div>
        </div>

    )
}

export default Homepage