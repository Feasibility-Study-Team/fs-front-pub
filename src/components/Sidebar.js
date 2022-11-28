import { NavLink } from "react-router-dom"
import { DashboardIcon } from "../assets"
import { AiFillPieChart } from "react-icons/ai"
import { MdPersonSearch, MdModelTraining } from "react-icons/md"
import { RiUserSettingsFill, RiLogoutBoxRFill } from "react-icons/ri"
import { FaUsers, FaUniversity } from "react-icons/fa"

const Sidebar = () => {
  const dataSidebar = [
    {
      name: "Overview",
      icon: <AiFillPieChart size={16} />,
      link: "/admin/"
    },
    {
      name: "Data Penguji",
      icon: <MdPersonSearch size={16} />,
      link: "/admin/penguji"
    },
    {
      name: "Data Inventor",
      icon: <RiUserSettingsFill size={16} />,
      link: "/admin/inventor"
    },
    {
      name: "Data Alat",
      icon: <FaUsers />,
      link: "/admin/alat"
    },
    {
      name: "Feasibility Data",
      icon: <MdModelTraining />,
      link: "/admin/feasibility"
    },
    {
      name: "institusi Data",
      icon: <FaUniversity />,
      link: "/admin/institusi"
    }
  ]

  const sidebarStyle = {
    activeClassName: "flex gap-3 items-center px-5 h-full w-full bg-sbactive text-sbactivetext border-l-4 border-sbactivetext",
    deactiveClassName: "flex gap-3 items-center px-5 h-full w-full hover:bg-sbactive",
    bottomBar: "flex gap-3 items-center px-5 h-[56px] w-full hover:bg-sbactive",
    linkStyle: "h-[56px] w-full flex items-center"
  }

  return (
    <aside className="sidebar-header flex flex-col bg-sidebar left-0 top-0 bottom-0 h-screen w-[255px] text-sbtext">
      <div className="flex items-center gap-3 font-bold text-lg py-10 px-5">
        <img src={DashboardIcon} alt="Dashboard icon" />
        <p>Dashboard</p>
      </div>
      <div className="mb-24">
        <ul className="flex flex-col">
          {dataSidebar.map((item, index) => (
            <li key={index} className={sidebarStyle.linkStyle}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? sidebarStyle.activeClassName : sidebarStyle.deactiveClassName
                }
                to={item.link}
                end={index === 0 ? true : false}
              >
                {item.icon}
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <hr className="border-sbactive border" />
      <button className={sidebarStyle.bottomBar}>
          <RiLogoutBoxRFill size={16} />
          Logout
        </button>
    </aside>
  )
}

export default Sidebar