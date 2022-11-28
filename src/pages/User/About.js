import { useEffect } from "react"
import { AnalyzeAbout, CardAbout, DedicatedAbout, HeadAbout, OpinionAbout, ToolsHomepage } from "../../components"
import { styles } from "../../constant"
import { aboutData } from "../../constant/data"

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-full overflow-hidden">
      <div className={`w-full bg-darkBlue ${styles.flexCenter} ${styles.paddingX} sm:py-32 py-8`}>
        <HeadAbout title={aboutData.headTitle} img={aboutData.headImg} data={aboutData.headData} />
      </div>

      <div className={`w-full bg-white ${styles.flexCenter} ${styles.paddingX} ${styles.paddingY}`}>
        <AnalyzeAbout title={aboutData.analyzeTitle} desc={aboutData.analyzeDesc} />
      </div>

      <div className={`w-full bg-white ${styles.flexCenter} ${styles.paddingX} ${styles.paddingY}`}>
        <CardAbout title={aboutData.card1Title} desc={aboutData.card1Desc} img={aboutData.card1Img} flex={true} color={aboutData.card1Color} />
      </div>

      <div className={`w-full bg-white ${styles.flexCenter} ${styles.paddingX} ${styles.paddingY}`}>
        <CardAbout title={aboutData.card2Title} desc={aboutData.card2Desc} img={aboutData.card2Img} data={aboutData.card2Data} flex={false} color={aboutData.card2Color} />
      </div>

      <div className={`w-full bg-white ${styles.flexCenter} ${styles.paddingX} ${styles.paddingY} relative z-10`}>
        <CardAbout title={aboutData.card3Title} desc={aboutData.card3Desc} img={aboutData.card3Img} flex={true} color={aboutData.card3Color} />
      </div>

      <div className={`w-full bg-placeholder relative ${styles.flexCenter}`}>
        <DedicatedAbout title={aboutData.dedicatedTitle} desc={aboutData.dedicatedDesc} data={aboutData.dedicatedData} />
      </div>

      <div className={`w-full bg-greenuser ${styles.flexCenter} relative`}>
        <OpinionAbout title={aboutData.opinionTitle} quote={aboutData.opitionQuote} img={aboutData.opinionImg} name={aboutData.opinionName} data={aboutData.opinionData} />
      </div>

      <div className={`w-full bgCardBlue ${styles.paddingY} relative`}>
        <ToolsHomepage title={aboutData.toolsTitle} desc={aboutData.toolsDesc} img={aboutData.toolsImg} />
      </div>


    </div>
  )
}

export default About