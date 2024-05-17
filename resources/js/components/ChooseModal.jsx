import {useStore} from "@/store.ts";
import {useTonAddress} from "@tonconnect/ui-react";
import {useEffect, useState} from "react";
import {router} from "@inertiajs/react";
import {useTaskParentContract} from "@/hooks/useTaskParentContract.ts";
import {Address, toNano} from "@ton/core";
import {useTonConnect} from "@/hooks/useTonConnect.ts";


export default function ChooseModal({task})
{
    const connect= useTonConnect()
    const address= useTonAddress()
    const closeModal=useStore((state)=>state.CloseChooseModal)
    const contract = useTaskParentContract()
    const checking = async ()=> {
        let ch = await contract.getChild(message.id)
        let c = await contract.getChildInfo(ch)
        if(task.exec_id !== c.executor.toString())
        {
           router.post('/updtask', {'id':Number(c.id),'exec':c.executor.toString()})
        }
    }

    useEffect(()=>{
        checking()
    },[])

    const [message,setMsg]=useState({
        id:BigInt(task.id),
        sender:Address.parse(task.user_id),
        executor:null,
        coin_amount:toNano(task.price)
    });
    const chooseFunc=async (item)=>{
        await setMsg(prevState => {return {...prevState,executor: Address.parse(item.user_id)}})
        contract.newTask(message)
    }
    const exec=task.responses.map((item)=> <div key={item.id} className={"flex gap-4"}> <p>{item.user_id}</p> <button onClick={()=>chooseFunc(item)}>choose</button> </div>)
    return (

        <div className={'bg-red-400 w-full h-full absolute top-0 z-10'}>
            <button onClick={closeModal}>back</button>
            {exec}
            <button onClick={()=>{contract.getChild(message.id)}}>address</button>
        </div>
    )
}
