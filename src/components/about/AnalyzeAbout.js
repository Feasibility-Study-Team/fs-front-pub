import { styles } from "../../constant"

const AnalyzeAbout = ({title, desc}) => {
  return (
    <div className={`${styles.boxContent} flex flex-col gap-7 items-center`}>
        <h2 className="font-bold text-5xl text-cardtext text-center">{title}</h2>
        <p className="font-medium text-lg text-greyuser max-w-md text-center">{desc}</p>
    </div>
  )
}

export default AnalyzeAbout