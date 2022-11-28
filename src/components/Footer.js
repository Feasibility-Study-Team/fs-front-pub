import { Link } from "react-router-dom"
import { styles } from "../constant"
import { MdKeyboardArrowUp } from "react-icons/md"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} sm:py-16 md:py-36 py-8`}>
      <div className={`${styles.boxWidth} flex flex-col gap-14`}>
        <div className="w-full flex flex-row flex-wrap gap-x-36 gap-y-8 items-start lg:justify-between justify-center pb-16 border-b-2 border-placeholder text-cardtext">
          <div className="sm:w-[250px] w-full">
            <p className="text-greyuser">Our product is the best choice for test your project feasibility and investment</p>
          </div>
          <div className="sm:w-[250px] w-full flex flex-col gap-4">
            <h3 className="font-semibold text-2xl">Home</h3>
            <div>
              <Link className="text-greyuser">Copyright</Link>
            </div>

          </div>
          <div className="sm:w-[250px] w-full flex flex-col gap-4">
            <h3 className="font-semibold text-2xl">Our Information</h3>
            <div>
              <Link to="/about" className="text-greyuser">About Us</Link>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <p>&copy; 2022 Merah X Fearless</p>
          <button onClick={scrollToTop} className="flex items-center justify-center cursor-pointer w-14 h-14 bg-[#A4A4A3] rounded-full text-white">
            <MdKeyboardArrowUp size={25} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer