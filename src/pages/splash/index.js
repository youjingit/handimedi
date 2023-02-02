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
    }, [navigate]);

    return(
        <div className={"splash_container" + (loading? " fadeOut" : "")}>
            <h1>
                <img src={process.env.PUBLIC_URL + '/static/images/logo.png'} alt="handimedi"/>
            </h1>
        </div>
    )
}

export default Splash;