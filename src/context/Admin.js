import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from "../controller/adminController"

const AdminContext = createContext()

const AdminProvider = ({ children }) => {
    const navigate = useNavigate()
    const [penguji, setPenguji] = useState(null)
    const [inventor, setInventor] = useState(null)
    const [aspek, setAspek] = useState(null)
    const [parameter, setParameter] = useState(null)
    const [institusi, setInstitusi] = useState(null)
    const [alat, setAlat] = useState(null)
    const [uji, setUji] = useState(null)
    const [cinventor, setCInventor] = useState(null)
    const [cpenguji, setCPenguji] = useState(null)
    const [calat, setCAlat] = useState(null)

    const [idHapus, setIdHapus] = useState(null)
    const [openModal, setOpenModal] = useState(false)

    //first response
    useEffect(() => {
        api.countInventor()
            .then((res) => {
                setCInventor(res);
            })
            .catch((err) => {
                console.log(err)
            })

        api.countPenguji()
            .then((res) => {
                setCPenguji(res);
            })
            .catch((err) => {
                console.log(err)
            })

        api.countAlat()
            .then((res) => {
                setCAlat(res);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    useEffect(() => {
        console.log("run penguji")
        api.getPenguji()
            .then((res) => {
                console.log(res)
                setPenguji(res);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        console.log("run inventor")
        api.getInventor()
            .then((res) => {
                console.log(res)
                setInventor(res);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        console.log("run alat")
        api.getAlat()
            .then((res) => {
                setAlat(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        console.log("run aspek")
        api.getAspek()
            .then((res) => {
                console.log(res)
                setAspek(res?.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        console.log("run institusi")
        api.getInstitusi()
            .then((res) => {
                setInstitusi(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        console.log('run uji')
        api.getUji()
            .then((res) => {
                setUji(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    // modal
    const handleModal = (id) => {
        setOpenModal(true)
        setIdHapus(id)
    }

    const handlerHapus = () => {
        api.deleteInventor(idHapus)
            .then(() => {
                getInventor()
                getPenguji()
            })
            .catch((err) => {
                console.log(err)
            })
        setOpenModal(false)
    }

    // get function
    const countInventor = () => {
        api.countInventor()
            .then((res) => {
                setCInventor(res);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const countPenguji = () => {
        api.countPenguji()
            .then((res) => {
                setCPenguji(res);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    // const countAlat = () =>{
    //     api.countAlat()
    //         .then((res) => {
    //             setCAlat(res);
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }

    const getAspek = () => {
        api.getAspek()
            .then((res) => {
                setAspek(res?.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const getPenguji = () => {
        api.getPenguji()
            .then((res) => {
                setPenguji(res);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const getInventor = () => {
        api.getInventor()
            .then((res) => {
                setInventor(res);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const getInstitusi = () => {
        api.getInstitusi()
            .then((res) => {
                setInstitusi(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const getUji = () => {
        api.getUji()
            .then((res) => {
                setUji(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    //handle change
    const handleToPenguji = (id) => {
        api.updateToPenguji(id)
            .then(() => {
                getInventor()
                getPenguji()
                countInventor()
                countPenguji()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleToInventor = (id) => {
        api.updateToInventor(id)
            .then(() => {
                getInventor()
                getPenguji()
                countInventor()
                countPenguji()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    // feaibility

    const addAspek = (values, setError) => {
        api.addAspek(values)
            .then(() => {
                getAspek()
                navigate("/admin/feasibility")
            })
            .catch((err) => {
                console.log(err)
                setError("error")
            })
    }

    const addParameter = (values, setError) => {
        api.addParameter(values)
            .then(() => {
                getAspek()
                navigate("/admin/feasibility")
            })
            .catch((err) => {
                console.log(err)
                setError("error")
            })
    }

    const addData = (values, setError) => {
        api.addData(values)
            .then(() => {
                getAspek()
                navigate("/admin/feasibility")
            })
            .catch((err) => {
                console.log(err)
                setError("error")
            })
    }

    const handlerParameter = (id) => {
        console.log(id)
        api.getAspekId(id)
            .then((res) => {
                setParameter(res?.data?.parameter)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    // institusi
    const addInstitusi = (values, setError) => {
        api.addInstitusi(values)
            .then(() => {
                getInstitusi()
                navigate("/admin/institusi")
            })
            .catch((err) => {
                console.log(err)
                setError("Gagal menambahkan")
            })
    }

    //uji 
    const addUji = (values) => {
        api.createUji(values)
            .then(() => {
                getUji()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <AdminContext.Provider value={{
            penguji,
            inventor,
            handleToPenguji,
            handleToInventor,
            openModal,
            handleModal,
            handlerHapus,
            setOpenModal,
            aspek,
            addAspek,
            parameter,
            addParameter,
            addData,
            handlerParameter,
            institusi,
            addInstitusi,
            alat,
            uji,
            addUji,
            cinventor,
            cpenguji,
            calat
        }}>
            {children}
        </AdminContext.Provider>
    )
}

export { AdminContext, AdminProvider }