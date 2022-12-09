import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { styles } from '../../../../constant'
// import { pdfIcon } from '../../../../assets'
import { colorTest, colorText } from '../../../../constant/formatter'
import { UserContext } from '../../../../context/User'
import api from "../../../../controller/inventorController"

const InventorFeasibilityItem = () => {
    const { setIdAlat, dataAlat, handlePasar, handleArsip } = useContext(UserContext)
    const { id } = useParams()
    const [data, setData] = useState(null)

    useEffect(() => {
        api.getUjiId(id)
            .then((res) => {
                console.log(res?.data)
                setData(res?.data)
                setIdAlat(res?.data?.alat?.id_alat)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [setIdAlat, id])
    // const data = {
    //     name: "Lawn Mower",
    //     status: "Done! Check your project report",
    //     review: "With the help of the feasibility study, one will know all the details of the projects and can, after that, organize them properly. The feasibility study conducted helps the parties involved in identifying various problems associated with the project like the logistic problem, labor supply, etc., which will be useful in getting the solutions for the problem. It at the same time also helps in developing the different strategies for the business like financial strategies, marketing strategies, etc. Thus it helps the organization in making an informed decision.",
    //     report: "/src/pdf/asdasd-1.pdf",
    //     result: 90
    // }

    return (
        <div className="w-full px-10 flex flex-col gap-7 text-cardtext">
            {console.log("idalat", dataAlat)}
            <h1 className="font-light text-[#1C768F] text-2xl">{`Feasibility Test Status < ${data?.alat?.nama_alat}`}</h1>
            <div className="flex flex-col gap-2 p-8 bg-card rounded-lg">
                <h2 className="text-2xl">Your project is</h2>
                <p className={`font-medium text-4xl ${colorText(data?.Status)}`}>{data?.Status}</p>
            </div>
            <div className="flex flex-col p-8 gap-12 bg-card rounded-lg">
                <h2 className="font-medium text-3xl">Feasibility Information</h2>
                <div className="flex flex-col-reverse lg:flex-row gap-12">
                    <div className="basis-7/12 flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <h3 className="font-medium text-xl">Project Review</h3>
                            <p className="text-justify">{data?.review}</p>
                        </div>
                        {/* <div className="flex flex-col gap-4">
                            <h3 className="font-medium text-xl">Project Report</h3>
                            <a className="border border-[#11AF22] bg-white w-44 h-52 flex flex-col items-center justify-center gap-2"
                                href={data?.report}
                                target="blank">
                                <img src={pdfIcon} alt="pdf"/>
                                <p className="font-light text-xs">hepa-filter_report.pdf</p>
                            </a>
                        </div> */}
                        {console.log("arsip", dataAlat?.pemasaran)}
                    </div>
                    <div className="basis-5/12 flex flex-col items-center gap-4 font-medium">
                        <h3 className="text-xl">Your Project Feasibility Score</h3>
                        <p className={`text-8xl ${colorTest(data?.nilai)}`}>{data?.nilai}%</p>
                    </div>
                </div>
                {dataAlat && <div>
                    {dataAlat?.pemasaran === true ?
                        <button onClick={handleArsip} className={styles.btnStyle1}>Arsip</button> :
                        <button onClick={handlePasar} className={styles.btnStyle2}>Pasarkan</button>}

                </div>}
            </div>
        </div>
    )
}

export default InventorFeasibilityItem