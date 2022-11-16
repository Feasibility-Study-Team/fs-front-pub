import { useOutletContext } from "react-router-dom"

const FeasibilityAlat = () => {
  const data = useOutletContext()
  return (
    <div>
      {console.log(data)}
      <h2 className="font-semibold text-2xl text-cardtext">Dokumen Feasibility Study</h2>
    </div>
  )
}

export default FeasibilityAlat