import {useEffect} from "react";

export default function Router()
{
    useEffect(()=>{
        console.log(window.Telegram.WebApp.initData)
    },[])
}
