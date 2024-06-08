import {useEffect} from "react";
import {useTonConnect} from "@/hooks/useTonConnect.ts";
import {useTonWallet} from "@tonconnect/ui-react";

export default function Router({task})
{
    const wallet=useTonWallet()
    useEffect(()=>{
        console.log(wallet?.account.address)
    },[wallet])
    return (
        <span className="loader"></span>
    )
}
