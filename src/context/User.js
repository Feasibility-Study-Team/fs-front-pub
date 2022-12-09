import React, { createContext, useEffect, useState } from 'react'
import { useJwt } from "react-jwt";
import { useNavigate } from 'react-router-dom';
import api from "../controller/inventorController"

const UserContext = createContext()

const useAuth = () => {
    const token = localStorage.getItem('token')

    const { isExpired, decodedToken } = useJwt(token);

    if (decodedToken) {
        if (decodedToken.role !== "Inventor" || decodedToken.role !== "Penguji") {
            return true
        }
    }

    if (!isExpired) {
        return true;
    }

    return false;
}

const UserProvider = ({ children }) => {
    const [idAlat, setIdAlat] = useState(null)
    const [dataAlat, setDataAlat] = useState(null)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const token = localStorage.getItem('token')
    const { decodedToken } = useJwt(token);

    const navigate = useNavigate()
    const isAuth = useAuth()

    useEffect(() => {
        api.getAlatId(idAlat)
            .then((res) => {
                setDataAlat(res?.data)
            })
            .catch((err) => {
                console.log(err)
                setError(err?.message)
            })
    }, [idAlat])

    useEffect(() => {
        console.log("user")
        if (decodedToken) {
            if (decodedToken?.role === "Inventor") {
                api.getInventorId(decodedToken?.id)
                    .then((res) => {
                        console.log("role", res)
                        setUser(res?.data)
                    })
                    .catch((err) => {
                        setError(err?.message)
                    })
                    .finally(() => {
                        setLoading(false)
                    })
            } else {
                api.getPengujiId(decodedToken?.id)
                    .then((res) => {
                        console.log(res)
                        setUser(res?.data)
                    })
                    .catch((err) => {
                        setError(err?.message)
                    })
                    .finally(() => {
                        setLoading(false)
                    })
            }
        }
    }, [decodedToken])

    const handlePasar = () => {
        api.updateAlat(idAlat, { pemasaran: true })
            .then((res) => {
                setDataAlat(res?.data)
            })
            .catch((err) => {
                console.log(err)
                setError(err?.message)
            })
    }

    const handleArsip = () => {
        api.updateAlat(idAlat, { pemasaran: false })
            .then((res) => {
                setDataAlat(res?.data)
            })
            .catch((err) => {
                console.log(err)
                setError(err?.message)
            })
    }

    const logout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    const createAlat = (values, setError) => {
        api.createAlat(values)
            .then((res) => {
                console.log(res)
                getUserId()
                navigate("/inventor/project")
            })
            .catch((err) => {
                console.log(err)
                setError("error")
            })
    }

    const getUserId = () => {
        setLoading(true)
        if (decodedToken) {
            if (decodedToken?.role === "Inventor") {
                api.getInventorId(decodedToken?.id)
                    .then((res) => {
                        console.log("role", res)
                        setUser(res?.data)
                    })
                    .catch((err) => {
                        setError(err?.message)
                    })
                    .finally(()=>{
                        setLoading(false)
                    })
            } else {
                api.getPengujiId(decodedToken?.id)
                    .then((res) => {
                        console.log(res)
                        setUser(res?.data)
                    })
                    .catch((err) => {
                        setError(err?.message)
                    })
                    .finally(()=>{
                        setLoading(false)
                    })
            }
        }
    }

    return (
        <UserContext.Provider value={{ isAuth, logout, decodedToken, idAlat, setIdAlat, dataAlat, handlePasar, handleArsip, user, createAlat, loading, error }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }