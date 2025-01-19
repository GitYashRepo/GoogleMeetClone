import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"



export const Room = ()=>{
    const [searchParam, setSerachParam] = useSearchParams();
    const name = searchParam.get('name');

    useEffect(()=>{
        // login to init user to the room
    },[name])
    
    return <div>
        Hi {name}
    </div>
}
