import { LogoRound } from "../assets"

const Loading = ({height}) => {
    return (
        <div className={`${height} w-full flex justify-center items-center relative -top-16`}>
            <div className="flex flex-col items-center gap-4">
                <img src={LogoRound} alt="logo" className="animate-bounce w-20 h-20" />
                <p className="font-medium text-cardtext text-lg">Loading</p>
            </div>
        </div>
    )
}

export default Loading