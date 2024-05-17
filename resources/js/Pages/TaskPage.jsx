import {useEffect, useState} from "react";
import {router} from "@inertiajs/react";
import {Address, toNano} from "@ton/core";
import {useTaskParentContract} from "@/hooks/useTaskParentContract.ts";

export default function ({task})
{
    const exec=task.responses.map((item)=> <div key={item.id} className={"flex gap-4"}> <p>{item.user_id}</p> <button onClick={()=>chooseFunc(item)}>choose</button> </div>)
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
    const contract = useTaskParentContract()
    const done = async ()=>{
        let address= await contract.getChild(task.id);
        contract.markAsDone(address)
    }
    async function checking()
    {
       let address= await contract.getChild(task.id);
       if(address !== null)
       {
           let info = await contract.getChildInfo(address)

           if(Number(info.status) !== task.status)
           {
               router.post('/updtask',{id:Number(task.id),status:Number(info.status),exec:info.executor.toString()})
           }
       }
    }
    const call=()=>{setInterval(checking ,5000)}
    useEffect(call,[])
    return (
        <div>
            <button onClick={()=>{router.get('/')}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/>
                </svg>
            </button>
            <h1>{task.headline}</h1>
            <p>Status : {task.status}</p>
            <p>{task.description}</p>
            {task.status == 0 ?  'responses:' + {exec} : ''}
            {task.status == 1 ?  <button onClick={done}>mark</button> : ''}


        </div>
    )
}
