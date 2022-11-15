import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components'

const LayoutAdmin = () => {
    return (
        <>
            <div className="flex overflow-hidden h-screen w-full">
                <Sidebar />
                <main className='h-screen overflow-hidden w-full bg-adminholder'>
                    <Outlet />
                </main>
            </div>

        </>
    )
}

export default LayoutAdmin