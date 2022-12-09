import React, { createContext, useEffect, useState } from 'react'
import { useJwt } from "react-jwt";
import api from "../controller/ujiController"

const UjiContext = createContext()

const UjiProvider = ({ children }) => {
    const token = localStorage.getItem('token')
    const { decodedToken } = useJwt(token);
    const [uji, setUji] = useState(null)
    const [aspek, setAspek] = useState(null)
    const [idAlat, setIdAlat] = useState(null)
    const [idUji, setIdUji] = useState(null)
    const [dataUji, setDataUji] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(idUji){
            console.log("run 1")
            api.getUjiId(idUji)
            .then((res) => {
                setDataUji(res?.data)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(()=>{
                setLoading(false)
            })
        }
    }, [idUji])



    useEffect(() => {
        if (decodedToken) {
            console.log("run first")
            api.getUjiPenguji(decodedToken?.id)
                .then((res) => {
                    setUji(res?.data)
                    console.log("respon", res?.data)
                })
                .catch((err) => {
                    console.log(err)
                })
                .finally(()=>{
                    setLoading(false)
                })

            api.getAspek()
                .then((res) => {
                    setAspek(res?.data)
                })
                .catch((err) => {
                    console.log(err)
                })
                .finally(()=>{
                    setLoading(false)
                })
        }

    }, [decodedToken])
    return (
        <UjiContext.Provider value={{ uji, aspek, idAlat, setIdAlat, setIdUji, dataUji, setDataUji, loading }}>
            {children}
        </UjiContext.Provider>
    )
}

export { UjiContext, UjiProvider }