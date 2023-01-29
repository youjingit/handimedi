import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Splash(){
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate()

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(true);
        }, 3000)

        setTimeout(()=>{
            navigate('/intro');
        }, 3400)
    }, []);

    return(
        <div className={"splash_container" + (loading? " fadeOut" : "")}>
            <img src="/static/images/logo.png" alt="handimedi"/>
        </div>
    )
}

export default Splash;