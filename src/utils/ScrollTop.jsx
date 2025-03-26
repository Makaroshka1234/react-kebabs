import React, { useEffect } from 'react'
import { useLocation } from 'react-router'

const ScrollTop = () => {

    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])
    return (
        <div>

        </div>
    )
}

export default ScrollTop
