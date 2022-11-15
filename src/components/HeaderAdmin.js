const HeaderAdmin = ({name, icon, title}) => {
  return (
    <div className="w-full flex justify-between items-center h-11">
        <h1 className="font-bold text-admintext text-2xl">{title}</h1>
        <div className="flex items-center gap-4">
            <p className="font-semibold text-admintext text-sm">{name}</p>
            <img className="h-11 w-11 rounded-full border-2 border-spacing-1" src={icon} alt="profile"/>
        </div>

    </div>
  )
}

export default HeaderAdmin