import React, { createContext, useEffect, useState } from 'react'
import api from "../controller/userController"

const HomeContext = createContext()

const HomeProvider = ({children}) =>{
    const [product, setProduct] = useState(null)

    useEffect(()=>{
        api.getProduct()
            .then((res)=>{
                setProduct(res?.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])
    return(
        <HomeContext.Provider value={{product}}>
            {children}
        </HomeContext.Provider>
    )
}

export {HomeContext, HomeProvider}