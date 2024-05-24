import {TonConnectButton, useTonAddress} from "@tonconnect/ui-react";
import {useTonConnect} from "../hooks/useTonConnect.ts"
import {useEffect} from "react";
import { router } from '@inertiajs/react'
import {Address} from "@ton/core";


export default function Main() {
    const sw=false;
    const tonConnect=useTonConnect();
    const tonAddress=useTonAddress()
    useEffect(()=>{
        if(tonConnect.connected === true)
           router.get('/tasks/'+tonAddress)
            },[tonConnect.connected])
    return(
        <>
            <TonConnectButton/>
            {
                tonConnect.connected === false ?  <h1>connect your wallet</h1> : ""
            }
        </>
    );

}
