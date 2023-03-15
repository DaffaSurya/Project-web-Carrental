import { useEffect } from "react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Protectedroute = () => {
    const [loading, setloading] = useState(true);
    const [islogin, setislogin] = useState(false);
    const navigate = useNavigate('')

    useEffect(() => {
        setloading(true)
        const token = localStorage.getItem('token');

        if(!token) {
            setloading(false)
            setislogin(false)
        } else {
            setislogin(true)
            setloading(false)
        }
    }, [islogin])

    if(loading) {
        return (
            <h2>loading...</h2>
        )
    }

    return islogin ? <Outlet/> : navigate('/')
}
 
export default Protectedroute;