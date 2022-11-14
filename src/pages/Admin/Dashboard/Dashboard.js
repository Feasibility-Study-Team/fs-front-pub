import React from 'react'
import Sidebar from '../../../components/Sidebar'
import DataPenguji from './DataPenguji'

const Dashboard = () => {
    return (
        <>
            <div className="flex overflow-hidden h-screen w-full">
                <Sidebar />
                <main className='h-screen overflow-y-scroll w-full p-8'>
                    <DataPenguji />
                </main>
            </div>

        </>
    )
}

export default Dashboard