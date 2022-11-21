import { AiFillStar } from "react-icons/ai"
const Rating = ({rating}) => {
    const items = []

    for (let index = 0; index < 5; index++) {
        if (index < rating) {
            items.push(<div className="text-[#FE7831]"><AiFillStar size={20} color=""/></div>)
        } else {
            items.push(<div className="text-[#C1C0C0]"><AiFillStar size={20} /></div>)
        }
    }
    return (
        <div className="flex">
            {items && items.map((item, index) => <div key={index}>{item}</div>)}
        </div>
    )
}

export default Rating