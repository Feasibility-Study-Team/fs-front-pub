import { Profile } from "../../../assets"
import { styles } from "../../../constant"
import HeaderAdmin from "../../../components/HeaderAdmin"
import { CategoryScale, Chart as CharJS, Legend, LinearScale, LineElement, PointElement, Tooltip } from "chart.js"
import { Line } from "react-chartjs-2"

CharJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
)

const OverviewAdmin = () => {
  const style = {
    cardHead: "flex-1 flex flex-col items-center gap-2 p-6 border-2 hover:shadow-sm border-[#DFE0EB] hover:border-[#3751FF] rounded-lg bg-white",
    cardHeadTitle: "font-bold text-lg text-[#9FA2B4]",
    cardHeadNumber: "font-bold text-4xl text-black",
    cardDetail: "flex-1 flex flex-col py-6 gap-2 items-left border-2 border-[#DFE0EB] rounded-lg bg-white"
  }

  const response = {
    jumlah_inventor: 150,
    jumlah_penguji: 30,
    jumlah_alat: 300
  }

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Pengujian",
        data: [8, 5, 6, 2, 4, 6, 10, 12, 50, 100, 40, 10],
        borderColor: "#3751FF"
      }
    ]
  }

  let delayed;

  const option = {
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default' && !delayed) {
          delay = context.dataIndex * 500 + context.datasetIndex * 300;
        }
        return delay;
      },
    },
    responsive: true,
    scales: {
      x: {
        display: true
      },
      y: {
        display: true,
      }
    }
  }
  return (
    <div className={styles.adminStyle}>
      <HeaderAdmin title="Overview" name="Muhammad Harsin" icon={Profile} />
      <div className="flex flex-col gap-8 py-10">
        <div className="flex flex-row gap-8">
          <div className={style.cardHead}>
            <h2 className={style.cardHeadTitle}>Jumlah Inventor</h2>
            <p className={style.cardHeadNumber}>{response.jumlah_inventor || 0}</p>
          </div>
          <div className={style.cardHead}>
            <h2 className={style.cardHeadTitle}>Jumlah Penguji</h2>
            <p className={style.cardHeadNumber}>{response.jumlah_penguji || 0}</p>
          </div>
          <div className={style.cardHead}>
            <h2 className={style.cardHeadTitle}>Jumlah Alat</h2>
            <p className={style.cardHeadNumber}>{response.jumlah_alat || 0}</p>
          </div>
        </div>
        <div className="flex flex-col gap-10  p-6 border-2 rounded-lg bg-white">
          <div>
            <h2 className="font-bold text-lg text-[#252733]">Today Trends</h2>
            <p className="text-xs text-[#9FA2B4]">as of 25 May 2019, 09:41 PM</p>
          </div>
          <div className="h-[380px]">
            <Line data={data} options={option} />
          </div>
        </div>
        <div className="flex flex-row gap-10">
          <div className={style.cardDetail}>
            <h2 className="font-bold text-lg text-[#252733] px-6">Statistik Pengujian</h2>
            <div className="flex flex-col">
              <div className="py-4 border-b-2 border-[#DFE0EB] flex items-center justify-center">
                <div className="w-full px-6 flex flex-row justify-between items-start font-semibold text-sm">
                  <p className="text-[#252733]">Pengujian hari ini</p>
                  <p className="text-[#9FA2B4]">79</p>
                </div>
              </div>
              <div className="py-4 border-b-2 border-[#DFE0EB] flex items-center justify-center">
                <div className="w-full px-6 flex flex-row justify-between items-start font-semibold text-sm">
                  <p className="text-[#252733]">Pengujian bulan ini</p>
                  <p className="text-[#9FA2B4]">150</p>
                </div>
              </div>
              <div className="py-4 border-b-2 border-[#DFE0EB] flex items-center justify-center">
                <div className="w-full px-6 flex flex-row justify-between items-start font-semibold text-sm">
                  <p className="text-[#252733]">Pengujian tahun ini</p>
                  <p className="text-[#9FA2B4]">2000</p>
                </div>
              </div>
              <div className="pt-4 flex items-center justify-center">
                <div className="w-full px-6 flex flex-row justify-between items-start font-semibold text-sm">
                  <p className="text-[#252733]">Pengujian dari awal waktu</p>
                  <p className="text-[#9FA2B4]">100000</p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.cardDetail}>
            <h2 className="font-bold text-lg text-[#252733] px-6">Statistik Alat</h2>
            <div className="flex flex-col">
              <div className="py-4 border-b-2 border-[#DFE0EB] flex items-center justify-center">
                <div className="w-full px-6 flex flex-row justify-between items-start font-semibold text-sm">
                  <p className="text-[#252733]">Alat hari ini</p>
                  <p className="text-[#9FA2B4]">79</p>
                </div>
              </div>
              <div className="py-4 border-b-2 border-[#DFE0EB] flex items-center justify-center">
                <div className="w-full px-6 flex flex-row justify-between items-start font-semibold text-sm">
                  <p className="text-[#252733]">Alat bulan ini</p>
                  <p className="text-[#9FA2B4]">150</p>
                </div>
              </div>
              <div className="py-4 border-b-2 border-[#DFE0EB] flex items-center justify-center">
                <div className="w-full px-6 flex flex-row justify-between items-start font-semibold text-sm">
                  <p className="text-[#252733]">Alat tahun ini</p>
                  <p className="text-[#9FA2B4]">2000</p>
                </div>
              </div>
              <div className="pt-4 flex items-center justify-center">
                <div className="w-full px-6 flex flex-row justify-between items-start font-semibold text-sm">
                  <p className="text-[#252733]">Alat dari awal waktu</p>
                  <p className="text-[#9FA2B4]">100000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverviewAdmin