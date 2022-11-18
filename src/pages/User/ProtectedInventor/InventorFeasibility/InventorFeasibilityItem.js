import React from 'react'
import { colorTest, colorText } from '../../../../constant/formatter'

const InventorFeasibilityItem = () => {
    const data = {
        name: "Lawn Mower",
        status: "Done! Check your project report",
        review: "With the help of the feasibility study, one will know all the details of the projects and can, after that, organize them properly. The feasibility study conducted helps the parties involved in identifying various problems associated with the project like the logistic problem, labor supply, etc., which will be useful in getting the solutions for the problem. It at the same time also helps in developing the different strategies for the business like financial strategies, marketing strategies, etc. Thus it helps the organization in making an informed decision.",
        report: "/src/pdf/asdasd-1.pdf",
        result: 90
    }

    return (
        <div className="w-full px-10 flex flex-col gap-7 text-cardtext">
            <h1 className="font-light text-[#1C768F] text-2xl">{`Feasibility Test Status < ${data.name}`}</h1>
            <div className="flex flex-col gap-2 p-8 bg-card rounded-lg">
                <h2 className="text-2xl">Your project is</h2>
                <p className={`font-medium text-4xl ${colorText(data.status)}`}>{data.status}</p>
            </div>
            <div className="flex flex-col p-8 gap-12 bg-card rounded-lg">
                <h2 className="font-medium text-3xl">Feasibility Information</h2>
                <div className="flex flex-col-reverse lg:flex-row gap-12">
                    <div className="basis-7/12 flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <h3 className="font-medium text-xl">Project Review</h3>
                            <p className="text-justify">{data.review}</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="font-medium text-xl">Project Report</h3>
                            <a className="border border-[#11AF22] bg-white w-44 h-52"
                                href={data.report}
                                target="blank">
                                pdf
                            </a>
                        </div>
                    </div>
                    <div className="basis-5/12 flex flex-col items-center gap-4 font-medium">
                        <h3 className="text-xl">Your Project Feasibility Score</h3>
                        <p className={`text-8xl ${colorTest(data.result)}`}>{data.result}%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InventorFeasibilityItem