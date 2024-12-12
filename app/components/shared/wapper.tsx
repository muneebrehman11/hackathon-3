import React, { FC } from "react"

const Wrapper:FC<{ children:React.ReactNode }>=({ children }) =>{
    return (
        <div className="px-10 sm:px-12 max-w-screen-2xl mx-auto">
            {children}
        </div>
    )
}
export default Wrapper;